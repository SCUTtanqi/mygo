package main

import (
	"beeblog/controllers"
	"github.com/astaxie/beego"
)

func main() {
	beego.Router("/", &controllers.IndexController{})
	beego.Router("/view/:id([0-9]+)", &controllers.ViewController{})
	beego.Router("/new", &controllers.NewController{})
	beego.Router("/delete/:id([0-9]+)", &controllers.DeleteController{})
	beego.Router("/edit/:id([0-9]+)", &controllers.EditController{})

	beego.Run()
}
