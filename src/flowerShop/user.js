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
_td[4].innerHTML=document.getElementById("studentSex1").checked?'��':'Ů';
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
���(Ŷ��¥�µ����ѣ�������radio��idҲҪ��)<input name="studentSex" type="radio" id="studentSex1" value="1" checked="true"/>��<input name="studentSex" type="radio" id="studentSex0" value="0"/>Ů��ɾ��ѡ���С���buttonҪɾ��disabled="true" */