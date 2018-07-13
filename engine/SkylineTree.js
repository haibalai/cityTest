/**
 * Created by Administrator on 2017/4/1 0001.
 *
 */


var ProjectTree = {


    playersName:[],
    playersInfo: {},
    pLayerTree:[],//图层树
    /*
     遍历获取图层树
     container:图层树的容器，例如div，不设置此参数则不加载到指定容器中
     */
    loadProjectTree: function (container) {
        this.playersInfo = {};
        var sgworld1 = SGWorld;
        //18:The root of the Tree.树的根节点
        var proTree = sgworld1.ProjectTree;
        var rootid = proTree.RootID;

        var rootID = proTree.GetNextItem(rootid, 18);
        this.bulidTreeFirst(sgworld1, rootID);
        console.log(this.playersInfo,'playersInfo')
    },



     bulidTreeFirst:function(sgworld65, current)
    {
        while (current) {
            var fchild = { 'name': '', 'child': [], 'leaf': true };
            //获取树节点的名称
            var itemName = sgworld65.ProjectTree.GetItemName(current);

            //判断子项是否是一个组（为什么判断是否为组呢？因为skyline的数据结构是这样组织的，结构如下：
            //子项-组-图层等）
            if (sgworld65.ProjectTree.IsGroup(current)) {

                fchild.name = itemName;
                if (sgworld65.ProjectTree.IsLayer(current)) {//叶子节点
                    var name = sgworld65.ProjectTree.GetItemName(current);

                    var layer = sgworld65.ProjectTree.getLayer(current);
                    this.playersName.push(name);
                    this.playersInfo[name] = layer;
                    //fchild.leaf = true;
                    fchild.name = name;
                }
                else {//递归遍历
                    //获取改组的第一个item
                    //
                    /*JavaScript
                     GetNextItem(ID,Code)
                     code=11:第一个item
                     */


                    fchild.leaf = false;
                    //var schild = { 'name': '', 'child': [], 'leaf': true };
                    //fchild.child.push(schild);

                    var childItem = sgworld65.ProjectTree.GetNextItem(current, 11);
                    this.buildTreeChild(sgworld65, childItem, fchild);
                }
                this.pLayerTree.push(fchild);
        }

        //13:获取其兄弟节点
        current = sgworld65.ProjectTree.GetNextItem(current, 13);
    }

},
    buildTreeChild :function (sgworld65,current,parent) {
            try
            {
                while (current) {
                    var fchild = {'name':'','child':[],'leaf':true};
                    //获取树节点的名称
                    var itemName = sgworld65.ProjectTree.GetItemName(current);

                    //判断子项是否是一个组（为什么判断是否为组呢？因为skyline的数据结构是这样组织的，结构如下：
                    //子项-组-图层等）
                    if (sgworld65.ProjectTree.IsGroup(current)) {
                        fchild.name = itemName;

                        if (sgworld65.ProjectTree.IsLayer(current)) {//叶子节点
                            var name = sgworld65.ProjectTree.GetItemName(current);

                            var layer = sgworld65.ProjectTree.getLayer(current);
                            this.playersName.push(name);
                            this.playersInfo[name] = layer;
                            fchild.name = name;
                            //fchild.leaf = true;
                        }
                        else {//递归遍历
                            //获取改组的第一个item
                            //
                            /*JavaScript
                             GetNextItem(ID,Code)
                             code=11:第一个item
                             */

                            fchild.leaf = false;
                            //var schild = { 'name': '', 'child': [], 'leaf': true };
                            //fchild.child.push(schild);

                            //this.pLayerTree.push(fchild);

                            var childItem = sgworld65.ProjectTree.GetNextItem(current, 11);
                            this.buildTreeChild(sgworld65, childItem, fchild);
                        }
                        parent.child.push(fchild);
                    }
                    //13:获取其兄弟节点
                    current = sgworld65.ProjectTree.GetNextItem(current, 13);
                }
            }
            catch (e) {
                alert(e.message);
            }
    }

    }
