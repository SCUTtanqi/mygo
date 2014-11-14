//bool数组，true表示按钮对应内容已展开，false表示内容未展开
var bottomStatus = new Array();
var rowCount;
var cellCount;

function initBottomStatus()
{
	var tb = document.getElementById("flowerTable");
	rowCount = tb.rows.length;
	cellCount = tb.rows[1].cells.length;
	for(var i = 0;i<rowCount;i++)
	{
		bottomStatus[i] = false;
	}
	/*
	alert("<p>rowCount:"+rowCount+"</p>");
	alert("<p>cellCount:"+cellCount+"</p>");
	*/
}

//bottomNum表示第几个按钮，从1开始
function clickBottom(bottomNum,imgSrc,imgAlt)
{
	var picRowNum = 0;
	for(var i =0;i<bottomNum-1;i++)
	{
		if(bottomStatus[i])
		{
			picRowNum++;
		}
	}
	picRowNum += bottomNum;
	picRowNum += 1;
	if(bottomStatus[bottomNum-1])
	{
		deleteRowPic(picRowNum);
		bottomStatus[bottomNum-1] = false;
	}
	else
	{
		insertPicToRow(imgSrc,imgAlt,picRowNum);
		bottomStatus[bottomNum-1] = true;
	}
}

function insertPicToRow(imgSrc,imgAlt,rowNum)
{
	var flowerTable=document.getElementById("flowerTable");
	var tr1=flowerTable.insertRow(rowNum);
	tr1.align="center";
	var td1=tr1.insertCell(-1);
	td1.colSpan=cellCount;
	var img1=document.createElement("img");
	img1.src=imgSrc;
	img1.alt=imgAlt;
	td1.appendChild(img1);
}

function deleteRowPic(rowNum)
{
	var flowerTable=document.getElementById("flowerTable");
	flowerTable.deleteRow(rowNum);
}

/*
insertPicToRow("images/rose.png","rose",2);
insertPicToRow("images/carnation.png","carnation",4);
*/