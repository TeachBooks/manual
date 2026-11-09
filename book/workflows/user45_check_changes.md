**Checking changes locally**

Once all the changes are made, it can be useful to check the changes locally on your device.
     
By doing that you can preview how it will look on the website. If all the required environments and packages are downloaded, checking changes locally is fairly easy. 

Navigate to the terminal in VS code, located at the bottom of the window or by clicking on `Terminal` in the top bar.

You will firstly need to activate the right environment. Type the following command:

```
conda activate my_new_book_env
```

(or the environment in which you have installed the `teachbooks` package!)

Then we can build the book locally. Make sure you are in the right repository in VS code and type the following command:

```
teachbooks build <path-to-book>
```

Note: use `--all` for the TeachBook whenever building a book to make sure the table of contents fully updates. Or alternatively, delete the old `_build` folder before building the new book.

Where book is the name of the folder containing all the files that make up your book. After `teachbooks` is done running you will get the following:

```{figure} ./figures/buildbook.PNG

Output
```
Paste the last line into your browser to see the updated changes. 

```{Note} 

Sometimes there are problems building the book. It could be that the building requires extensions that are not present in your environment. To prevent issues, make sure to update your environment by routinely updating your packages. You can do this by executing the following line in your environment in the command line.

`pip install -r requirements.txt --upgrade`

```

If your book includes interactive element a webserver is required to host the book. If you want to do this locally, you can make use of (the teachbooks package to start up a local webserver)[setup-local-server]