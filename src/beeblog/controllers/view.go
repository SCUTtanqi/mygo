package controllers

import (
	"beeblog/models"
	"github.com/astaxie/beego"
	"strconv"
)

type ViewController struct {
	beego.Controller
}

func (this *ViewController) Get() {
	id, _ := strconv.Atoi(this.Ctx.Params[":id"])
	this.Data["Post"] = models.GetBlog(id)
	this.Layout = "layout.tpl"
	this.TplNames = "view.tpl"
}
