---
id: test-page
title: TestPage
---

Goal is link: https://mcovid.org/docs/studies/

## ON-PAGE LINKS

1. Explore study definitions in the **[C19HCC Studies](/studies/).**

Result: https://mcovid.org/studies/
404 PAGE NOT FOUND

2. Explore study definitions in the **[C19HCC Studies](studies/).**

Result: https://mcovid.org/docs/test-page/studies/
404 PAGE NOT FOUND 

3. Explore study definitions in the **[C19HCC Studies](/studies.md).**

Result: https://mcovid.org/docs/studies
LOADS to https://mcovid.org/docs/studies with BROKEN LINKS

4. Explore study definitions in the **[C19HCC Studies](studies.md).**

Result: https://mcovid.org/docs/studies
LOADS to https://mcovid.org/docs/studies with BROKEN LINKS

5. Explore study definitions in the **[C19HCC Studies](studies).**

Result: https://mcovid.org/docs/test-page/studies
404 PAGE NOT FOUND 

6. Explore study definitions in the **[C19HCC Studies](/studies.md/).**

Result: https://mcovid.org/docs/studies/
WORKS!

---
USE THIS ONE:

7. Explore study definitions in the **[C19HCC Studies](/docs/studies/).**

Result: https://mcovid.org/docs/studies/
WORKS!
---