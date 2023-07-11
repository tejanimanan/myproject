var $ = (id) => document.getElementById(id);
function val(id,value=null)
{
    if(value===null)
    {
        return $(id).value;
    }
    else 
    {
        $(id).value = value;
    }
}
function html(id,text=null)
{
    if(text===null)
    {
        return $(id).innerHTML;
    }
    else 
    {
        $(id).innerHTML = text;
    }
}