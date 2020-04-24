import React, { useState, useMemo, useEffect } from 'react';
import Table from '@icgc-argo/uikit/Table';
import Tag, { TAG_TYPES } from '../Tag';
import styles from './styles.module.css';
import DefaultTag from '@icgc-argo/uikit/Tag';
import CodeList from './CodeList';
import Regex from './Regex';
import startCase from 'lodash/startCase';
//import { DownloadButtonContent, DownloadTooltip } from '../../components/common';
//import Button from '@icgc-argo/uikit/Button';
import { DataTypography, SchemaTitle } from '../Typography';
import { ModalPortal, useModalState } from '../../pages/dictionary';
import ScriptModal from '../ScriptModal';
import get from 'lodash/get';
//import isEmpty from 'lodash/isEmpty';
import { styled } from '@icgc-argo/uikit';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Notes = styled('div')`
  margin-bottom: 10px;
  font-family: trade-gothic-next;
`;

const TagContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    display: inline;
    :not(:first-child) {
      margin-top: 5px;
    }
  }
`;

const formatFieldType = value => {
  switch (value) {
    case 'number':
      return 'QUANTITY';
    case 'string':
      return 'TEXT';
    case 'coded':
      return 'CODE';
    default:
      return value.toUpperCase();
  }
};

const HeaderName = ({ name }) => {
  const sentenceCase = startCase(name);
  return (
    <SchemaTitle>
      {sentenceCase} ({name})
    </SchemaTitle>
  );
};

const FieldDescription = ({ name, description }) => (
  <div className={styles.fieldDescription}>
    <div className={styles.name}>{name}</div>
    <div>{description}</div>
  </div>
);

const FieldsTag = ({ fieldCount }) => (
  <DefaultTag
    className={`${styles.tag} ${styles.fields}`}
    style={{ marginTop: '3px' }}
  >{`${fieldCount} Field${fieldCount > 1 ? 's' : ''}`}</DefaultTag>
);

const Schema = ({ schema, menuItem, isLatestSchema }) => {
  // SSR fix
  if (typeof schema === 'undefined') return null;

  const context = useDocusaurusContext();
  const {
    siteConfig: {
      customFields: { GATEWAY_API_ROOT = '' },
    },
  } = context;

  const downloadTsvFileTemplate = fileName => {
    window.location.assign(`${GATEWAY_API_ROOT}clinical/template/${fileName}`);
  };

  /**
   * need to pass in state for Cell rendering
   * react-table rerenders everything
   */
  const initialExpandingFields = useMemo(
    () =>
      schema.fields.reduce((acc, val) => {
        acc[val.name] = false;
        return acc;
      }, {}),
    [schema],
  );

  const [expandedCodeLists, setExpandedCodeLists] = useState(initialExpandingFields);

  useEffect(() => {
    setExpandedCodeLists(initialExpandingFields);
  }, [schema]);

  const onCodelistExpandToggle = field => () =>
    setExpandedCodeLists({ ...expandedCodeLists, [field]: !expandedCodeLists[field] });

  const isCodeListExpanded = field => expandedCodeLists[field];

  const [currentShowingScripts, setCurrentShowingScripts] = React.useState(null);

  const NoteCell = ({ original: { notes } }) => {
    return (
      <div>
        {notes && <Notes>{notes}</Notes>}
      </div>
    );
  };

  const cols = [
    {
      Header: 'Field & Description',
      id: 'fieldDescription',
      Cell: ({ original: { name, description } }) => (
        <FieldDescription name={name} description={description} />
      ),
      style: { whiteSpace: 'normal', wordWrap: 'break-word', padding: '8px' },
      width: 200,
    },
    {
      Header: 'Required?',
      id: 'attributes',
      Cell: ({ original }) => {
        const required = get(original, 'required', "optional");
        return (
          <TagContainer>
            {(required=="required") && <Tag type={TAG_TYPES.required} />}
            {(required=="optional") && <Tag type={TAG_TYPES.optional} />}
            {(required=="conditional") && <Tag type={TAG_TYPES.conditional} />}
            {(required=="derived") && <Tag type={TAG_TYPES.derived} />}
            {(required=="extended") && <Tag type={TAG_TYPES.extended} />}
          </TagContainer>
        );
      },
      style: { padding: '8px' },
      width: 96,
    },
    {
      Header: 'Type',
      id: 'valueType',
      accessor: ({ valueType }) => formatFieldType(valueType),
      style: { padding: '8px' },
      width: 70,
    },
    {
      Header: 'Permissible Values',
      id: 'permissibleValues',
      accessor: 'permissible',
      Cell: ({ original }) => {
        const { name: field, permissible = {}, examples } = original;
        const { regex = null, codeList = null } = permissible;
//        const examples = meta && meta.examples && meta.examples.split(',');
        const examplesplit = examples && examples.split(',');
        if (regex) {
          return <Regex regex={regex} examples={examplesplit} />;
        } else if (codeList) {
          return (
            <CodeList
              codeList={codeList}
              onToggle={onCodelistExpandToggle(field)}
              isExpanded={isCodeListExpanded(field)}
            />
          );
        } else {
          return null;
        }
      },
      style: { whiteSpace: 'normal', wordWrap: 'break-word', padding: '8px' },
      width: 150,
    },
/*   {
      Header: 'COVID-19 Values',
      id: 'c19',
      accessor: 'c19',
      Cell: ({ original }) => {
        const { name: field, c19 = {}, examples } = original;
        const { regex = null, codeList = null } = c19;
        const examplesplit = examples && examples.split(',');
        if (regex) {
          return <Regex regex={regex} examples={examplesplit} />;
        } else if (codeList) {
          return (
            <CodeList
              codeList={codeList}
              onToggle={onCodelistExpandToggle(field)}
              isExpanded={isCodeListExpanded(field)}
            />
          );
        } else {
          return null;
        }
      },
      style: { whiteSpace: 'normal', wordWrap: 'break-word', padding: '8px' },
    },
*/
    {
      Header: 'Notes & Mappings',
      Cell: NoteCell,
      style: { whiteSpace: 'normal', wordWrap: 'break-word', padding: '8px' },
    }
  ];
  
  
  const profileCols = [
    {
      Header: 'COVID-Related Patterns and Codes',
      id: 'fieldDescription',
      Cell: ({ original: { name, description } }) => (
        <FieldDescription name={name} description={description} />
      ),
      style: { whiteSpace: 'normal', wordWrap: 'break-word', padding: '8px' },
    },
    {
      Header: 'Code',
      id: 'keyCode',
      accessor: 'keyCode',
      Cell: ({ original }) => {
        const { name: field, keyCode = {}, examples } = original;
        const { regex = null, codeList = null } = keyCode;
//        const examples = meta && meta.examples && meta.examples.split(',');
        if (regex) {
          return <Regex regex={regex} examples={examplesplit} />;
        } else if (codeList) {
          return (
            <CodeList
              codeList={codeList}
              onToggle={onCodelistExpandToggle(field)}
              isExpanded={isCodeListExpanded(field)}
            />
          );
        } else {
          return null;
        }
      },
      style: { whiteSpace: 'normal', wordWrap: 'break-word', padding: '8px' },
    },
    {
      Header: 'Result Codes or Units',
      id: 'permissibleValues',
      accessor: 'permissible',
      Cell: ({ original }) => {
        const { name: field, permissible = {}, examples } = original;
        const { regex = null, codeList = null } = permissible;
//        const examples = meta && meta.examples && meta.examples.split(',');
        const examplesplit = examples && examples.split(',');
        if (regex) {
          return <Regex regex={regex} examples={examplesplit} />;
        } else if (codeList) {
          return (
            <CodeList
              codeList={codeList}
              onToggle={onCodelistExpandToggle(field)}
              isExpanded={isCodeListExpanded(field)}
            />
          );
        } else {
          return null;
        }
      },
      style: { whiteSpace: 'normal', wordWrap: 'break-word', padding: '8px' },
    },
    {
      Header: 'Notes & Mappings',
      Cell: NoteCell,
      style: { whiteSpace: 'normal', wordWrap: 'break-word', padding: '8px' },
    }

  ]; 



  const containerRef = React.createRef();
//  console.log(schema);
  return (
    <div ref={menuItem.contentRef} data-menu-title={menuItem.name} className={styles.schema}>
      {currentShowingScripts && (
        <ModalPortal>
          <ScriptModal
            field={currentShowingScripts.fieldName}
            scripts={currentShowingScripts.content}
            onCloseClick={() => {
              setCurrentShowingScripts(null);
            }}
          />
        </ModalPortal>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <HeaderName name={schema.name} />
        <FieldsTag fieldCount={schema.fields.length} />
      </div>

      <div
        style={{
          marginBottom: '10px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <DataTypography style={{ flex: 1 }}>
          {schema && schema.description}
          <div>

          </div>
        </DataTypography>

        {/* <DownloadTooltip disabled={isLatestSchema}>
          <div style={{ marginLeft: '50px', alignSelf: 'flex-start' }}>
            <Button
              disabled={!isLatestSchema}
              variant="secondary"
              size="sm"
              onClick={() => downloadTsvFileTemplate(`${schema.name}.tsv`)}
            >
              <DownloadButtonContent disabled={!isLatestSchema}>
                File Template
              </DownloadButtonContent>
            </Button>
          </div>
        </DownloadTooltip> */}
      </div>

      <div ref={containerRef}>
        <Table
          parentRef={containerRef}
          columns={cols}
          data={schema.fields}
          showPagination={false}
          defaultPageSize={schema.fields.length}
          sortable={true}
          cellAlignment="top"
          withOutsideBorder
        />
        {schema.profiles && (schema.profiles.length > 0) ? <Table
          parentRef={containerRef}
          columns={profileCols}
          data={schema.profiles}
          showPagination={false}
          defaultPageSize={schema.profiles.length}
          sortable={true}
          cellAlignment="top"
          withOutsideBorder
        /> : <p>No COVID 19-specific patterns defined.</p>
        }
      </div>
    </div>
  );
};

export default Schema;
