function formvalues()
{
    document.getElementById('answer_text').innerHTML = "Here's the pascal's triangle";
    var n_val = document.getElementById('n_val').value;
    var div_1 = document.getElementById('answer');
    p_hd = [];
    div_1.innerHTML = '<p> </p>';
    for(i = 0; i < n_val; i++)
    {
        prin = '';	
        for(j = 0; j < i+1; j++)
        {
            if(i == 0 || j == 0)
              coef = 1;
            else 
              coef = coef * ((i -j )+ 1)/j;
            if(j < i)
              prin = prin + coef +',';
            else prin = prin + coef;
        }
        p_hd[i] = (prin + '\n');
        div_1.innerHTML += '<p>' + p_hd[i] +' </p>';
    }
}