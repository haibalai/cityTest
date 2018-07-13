/**
 * Created by Administrator on 2017/3/31 0031.
 */

var SGWorld;


function SkylineControl(){

    this.players = new Array();
    this.playersName = new Array();

}

SkylineControl.prototype.init  = function () {

    window.onload =function () {

        // var flyPath = "D:/water.FLY";
        // SGWorld = document.getElementById('TEX').CreateInstance("TerraExplorerX.SGWorld66");
        // SGWorld.Project.Open(flyPath);
        // console.log(SGWorld)
        // SGWorld.AttachEvent("OnLoadFinished",function () {
        //
        // });
        // ProjectTree.loadProjectTree();


            var obj = document.getElementById("sgworld");
            if (obj == null) {
                obj = document.createElement('object');
                obj.setAttribute("name", "sgworld");
                obj.setAttribute("id", "sgworld");
                obj.setAttribute("type", "application/x-skyline");
                obj.setAttribute("clsid", "{3A4F9199-65a8-11d5-85c1-0001023952c1}");
                document.body.appendChild(obj);
            }
        obj.open("http://192.168.2.165/pipe3d/pipe3d.FLY");

    }

}







    

    
