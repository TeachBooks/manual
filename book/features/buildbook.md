# Book build on webserver / GitHub Pages

Now that we have talked about how you can collaborate using git, it's time to explain how the book is actually built.

## GitLab Pages

## GitHub Pages

## Pipeline

Both GitLab and GitHub make use of CI/CD to publish the TeachBooks. CI/CD stands for Continuous Integration/Continuous Deployment. Within the scope of TeachBooks, it focuses on automating the process of building and deploying the books. It makes sure that the book is always up-to-date and available.

Concretely, Continuous Integration means that whenever changes are pushed to the repository (where does the publish branch come in?) the pipeline is triggered. Moreover, the pipeline also builds the book which is composed out of multiple .md or .ipynb files and converts those files into HTML.

Continuous Deployment ensures that the book is deployed onto the desired destination (in our case the website) and accessible to the readers.