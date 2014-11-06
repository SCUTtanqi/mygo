<script language="JavaScript">
function AddAction()
{
var _table=document.getElementById("studentList");
var _tr=_table.insertRow(-1);
var _td=new Array(5);
for(var i=0;i<_td.length;i++)
{
_td[i]=_tr.insertCell(-1);
}
_td[0].innerHTML="<input type='checkbox' name='ck' value='' />";
_td[1].innerHTML=_tr.rowIndex;
_td[2].innerHTML=document.getElementById("studentName").value;
_td[3].innerHTML=document.getElementById("studentAge").value;
_td[4].innerHTML=document.getElementById("studentSex1").checked?'男':'女';
}

function TableDel()
{
var _table=document.getElementById("studentList");
var cks=document.getElementsByName("ck");
for(var i=cks.length-1;i>-1;i--)
{
if(cks[i].checked)_table.deleteRow(cks[i].parentNode.parentNode.rowIndex);
}
}
</script>
/*
最后：(哦，楼下的提醒，忘了这radio的id也要改)<input name="studentSex" type="radio" id="studentSex1" value="1" checked="true"/>男<input name="studentSex" type="radio" id="studentSex0" value="0"/>女“删除选中行”的button要删除disabled="true" */