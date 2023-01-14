d = new Date();
month = d.getMonth();
day = d.getDate();
if (((month == 0 && day>=15)) || ((month == 1 && day<=2)))
{
document.write('
<div id="decor">
<center>
<img src="*** '+day+'.png" widght="600">
');
}
else
{
document.write('СОДЕРЖАНИЕ');
};