package controllers

import (
	"beeblog/models"
	"github.com/astaxie/beego"
	"strconv"
)

type DeleteController struct {
	beego.Controller
}

func (this *DeleteController) Get() {
	id, _ := strconv.Atoi(this.Ctx.Input.Param(":id"))
	models.DelBlog(models.GetBlog(id))
	this.Ctx.Redirect(302, "/")
}
