

# React-Life Is A Game

### 总结

题目听著非常『高大尚』其实本质就是个『行程规划APP』，不过该APP会把行程融合进一个RPG游戏的外壳中，玩家角色就是现实中的我们。

APP会根据玩家提供的『行程』对应游戏中的『任务』，用户可以设置任务类型为『重大任务』『目标任务』『限时任务』不同的任务提供的经验『EXP』值不同，随著玩家完成越来越多的任务，等级也会随之提升。
通过游戏的方式让用户认识到：
**『行程规划不是目的，而是过程』**

***注：截图中的美术资源只是借用作为展示并非正式使用。***

主页截图：

![image-20210705161247990](.\presentation\image-20210705161247990.png)

### 账本 bill

APP会提供账本功能，用来记录平时的收支情况。
同时游戏内的虚拟货币也是根据玩家写在账本上的进账来生成。
当结馀的财富≤0的时候标籤会显示绿色，反之会显示红色。
方便直观了解收入和支出。
使用了scrollView组件可以滑动查看历史记录。

![image-20210705161430652](F:\army_red\Projects\ReactNative\LifeIsAGame-navi\presentation\image-20210705161433478.png)

![image-20210705161430652](F:\army_red\Projects\ReactNative\LifeIsAGame-navi\presentation\image-20210705161430652.png)

### 任務 mission

任務是玩家自己發佈，完成以後也是玩家自己勾選表示完成。
整體風格與賬本相同，可以切換普通任務或者重要任務。
使用了scrollView組件可以滑動查看歷史記錄。
組件可以實現任務完成的狀態切換。
但是目前沒法做到統計，詳情後文會敘述。

![image-20210705161517485](.\presentation\image-20210705161602962.png)

### 商店 shop

非常樸素的商店界面，點擊勾選物品到頂部裝備欄。
同時這邊勾選的裝備會聯動到主頁的人物裝備。

![image-20210705161633140](.\presentation\image-20210705161633140.png)![image-20210705161637485](.\presentation\image-20210705161637485.png)![image-20210705161655582](.\presentation\image-20210705161655582.png)



### 文档目录 file content

- assets #图片、字体、图标素材
    - fonts
    - icons
    - images
        - settings
        - weapon
    - hooks #加载app之前的预加载文档
        - useCachedResources.js

- app.js #主界面

- dataHandler.js #几个界面之间的资料交换

- screen #bottom tab界面
    - MissionScreenItem
        - ScrollItem.js
    - ShopScreenItem
        - Box.js
    - BillScreen.js
    - HomeScreen.js
    - MissionScreen.js
    - SettingsScreen.js
    - ShopScreen.js

### 架构 structure

![image-20210705162059572](.\presentation\image-20210705162059572.png)

#### 部分琐碎的设定

①角色的HP:	
maxexp = k1 * level ^ 2 + k2 level - 4 (k1 = 1, k2 = 5)
②角色的ATK:	
ka * hp + 2 * level (ka = 1)
预定功能（如果有打算的话）：

- 每月APP会生成一次boss战，玩家每次战胜boss那麽下个月的boss强度就是玩家当前强度 * k。

- 如果玩家没有战胜boss那麽下个月的boss强度保持目前强度。

- 提供玩家自定义角色功能：可允许用户导入.png图像作为角色图像，不过可能会发生装备错位等情况

- 在Setting 中用户可以自定义相关参数(k1,k2,ka)以保证整体使用的平衡。

    

- 注：	此APP本身只是个『行程规划APP』，如何使用全看用户自己。如果想要无敌开局直接在账本中记上『收入-9,999,999,999NTD』然后去商店把装备全买过来也没有什麽问题。
    游戏机制的目的只是注重激励用户的主观能动性
