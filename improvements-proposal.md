question1:
I would fecth the data from the API URL using fetch promise and GET method
I will use the useEffect hook because it is allow me to fetch the data just when the UI elements updated
other considarations is to catch the error and use the currect parse data type for the API response

question2: 
Using a random generator for keys forces the the reconciliation process to always view every element in the array as "new" or "changed" ,
which forces it to re-Render - and that can cause some nasty side effects.
