function insertPicToRow(imgSrc,imgAlt,rowNum)
{
	var flowerTable=document.getElementById("flowerTable");
	var tr1=flowerTable.insertRow(rowNum);
	var td1=tr1.insertCell(-1);
	td1.colspan="3";
	var img1=document.createElement("img");
	img1.src=imgSrc;
	img1.alt=imgAlt;
	td1.appendChild(img1);
}

/*
insertPicToRow("images/rose.png","rose",2);
insertPicToRow("images/carnation.png","carnation",4);
*/