'use strict';
// Original teaching supplements; lecture numbering and PDF source links stay in content.js.
window.FIRST_GUIDES={
vector:{name:'先画箭头，再读坐标',slider:['数乘系数 λ',-1,2,1,.1],observe:'拖动λ：绿色箭头a固定，蓝色箭头λa随系数变化。负数使方向反转；零使箭头缩成原点。',blocks:[
['为什么一个数不够用？',[
'“走了3米”只说明距离；“向东走3米”同时说明大小和方向。我们把这样的量画成箭头：箭头起点是出发处，终点是到达处。箭头的长短表示大小，指向表示方向。向量就是把这两种信息放在一起。',
'选定横轴向右、纵轴向上后，$a=(3,2)$ 的意思是：横向移动3个单位，再纵向移动2个单位。3、2叫分量；括号把它们组成一个向量。这里的a是向量名字，不是某一个坐标。箭头可以平移，只要长度、方向不变，它仍表示同一个自由向量。',
'点 $P=(3,2)$ 表示位置；向量 $(3,2)$ 表示位移。数值写法相同，含义不同。只有指定原点O之后，位置向量 $\\overrightarrow{OP}$ 才与点P对应。若从 $A=(1,1)$ 走到 $B=(4,3)$，位移是 $\\overrightarrow{AB}=B-A=(3,2)$。']],
['加法和数乘为什么按坐标算？',[
'设 $a=(3,2),b=(-1,1)$。先走a，再从它的终点走b；横向总移动为 $3+(-1)=2$，纵向总移动为 $2+1=3$，所以 $a+b=(2,3)$。这就是首尾相接法。将b的起点移到a的终点不会改变b。',
'$2a$ 是连续走两次a，因此 $2a=(3+3,2+2)=(6,4)$。一般地，$\\lambda a=(\\lambda a_1,\\lambda a_2)$。希腊字母λ读“拉姆达”，在这里代表一个实数；它不是一个新的方向。$-a=(-3,-2)$ 表示沿相反方向走同样长。',
'减法 $a-b=a+(-b)$，先把b反向再相加。逐项计算为 $(3-(-1),2-1)=(4,1)$。常见错误是只把一个分量变号；负号必须作用在整个向量上。']],
['长度和单位向量：每一步怎么算？',[
'将a的终点向横轴作垂线，就得到直角三角形。两条直角边长度为 $|3|$ 和 $|2|$，勾股定理给出 $|a|^2=3^2+2^2=9+4=13$，因此 $|a|=\\sqrt{13}$。符号 $|a|$ 表示向量长度，不是对每个坐标单独取绝对值。',
'单位向量是“长度恰好为1”的向量。要保持a方向，只能把所有坐标同时除以同一个正数。取 $u=a/|a|=(3/\\sqrt{13},2/\\sqrt{13})$。检查 $|u|^2=9/13+4/13=1$，所以 $|u|=1$。',
'三维只需多加一个平方：若 $v=(2,-1,2)$，则 $|v|=\\sqrt{4+1+4}=3$，同向单位向量是 $(2/3,-1/3,2/3)$。零向量长度为0，不能除以0，所以零向量无法单位化。']]],check:'不看公式，说出(−2,3)表示怎样的移动，再算它的长度。答案应为√13，不能写成−2+3。'},
dot:{name:'把箭头的“沿线部分”找出来',slider:['向量b与横轴的夹角（度）',0,180,45,1],observe:'固定a=(3,0)，b长度为2。蓝色虚线垂直落到横轴，橙色线段是b沿a方向的向量投影；钝角时投影指向左。',blocks:[
['为什么要定义点积？',[
'假设力朝正东方向拉物体，但物体沿斜线移动。真正沿力方向的位移只是斜线的一部分。我们需要一个运算，既反映两个向量有多长，也反映它们有多“同向”。点积正是这样的量，几何定义为 $a\\cdot b=|a||b|\\cos\\theta$。',
'中间的“·”是点积符号，结果是一个实数。θ读“西塔”，表示两个非零向量的夹角，约定 $0\\leq\\theta\\leq\\pi$。锐角余弦为正、直角余弦为0、钝角余弦为负，所以点积可以为负；它不是长度。']],
['坐标公式为什么是对应相乘再相加？',[
'【补充讲解】由余弦定理，$|a-b|^2=|a|^2+|b|^2-2|a||b|\\cos\\theta$。另一方面，坐标计算给出 $|a-b|^2=(a_1-b_1)^2+(a_2-b_2)^2$。',
'将两个平方展开：$a_1^2-2a_1b_1+b_1^2+a_2^2-2a_2b_2+b_2^2$。把a的平方项、b的平方项分别合并，就是 $|a|^2+|b|^2-2(a_1b_1+a_2b_2)$。',
'比较两种表达式，先减去共同的 $|a|^2+|b|^2$，再除以−2，得到 $|a||b|\\cos\\theta=a_1b_1+a_2b_2$。因此 $a\\cdot b=a_1b_1+a_2b_2$；三维再加 $a_3b_3$。零向量虽然没有夹角，坐标点积仍定义为0。']],
['投影中的分母为什么要平方？',[
'设非零向量v给定方向，w是要投影的向量。先令 $e=v/|v|$，把方向向量变成单位长度。有向标量投影为 $w\\cdot e=|w|\\cos\\theta$，它可以为负。几何投影长度则是 $|w\\cdot e|$，一定非负。',
'向量投影还需要方向，因此 $p=(w\\cdot e)e$。将 $e=v/|v|$ 代入：$p=(w\\cdot v/|v|)(v/|v|)=\\frac{w\\cdot v}{|v|^2}v=\\frac{w\\cdot v}{v\\cdot v}v$。分母出现两次长度，是因为一次把点积的方向单位化，另一次给投影配上单位方向。',
'例：$w=(3,1),v=(1,2)$。先算 $w\\cdot v=3+2=5$，$v\\cdot v=1+4=5$，故 $p=(5/5)(1,2)=(1,2)$。余量 $r=w-p=(2,-1)$。检查 $r\\cdot v=2-2=0$，余量确实垂直于投影方向。',
'若要夹角，先算点积和两个长度，再用 $\\cos\\theta=(a\\cdot b)/(|a||b|)$。只有两个向量均非零时才能这样除。判断垂直时，非零向量点积等于0即可，不必先求角度。']]],check:'把b拖到120°：点积应为−3；b的有向标量投影为−1，但投影长度为1。'},
cross:{name:'从底×高理解面积与体积',slider:['沿z方向的高度 h',0,3,2,.1],observe:'底面由a=(3,0,0)、b=(0,2,0)张成，真实面积是6。c=(0,0,h)竖起后得到平行六面体。图为斜投影，不能用屏幕上的长度测真实高度。',blocks:[
['点积不够：还要找一个垂直方向',[
'两个三维向量a、b可以张成一个平面。我们常想找垂直于这个平面的向量，例如写平面方程时需要法向量。叉积 $a\\times b$ 就是这样的向量：方向同时垂直于a和b，长度等于它们张成的平行四边形面积。',
'长度公式为 $|a\\times b|=|a||b|\\sin\\theta$。这是“底×高”：底取 $|a|$，高是b垂直于a的部分 $|b|\\sin\\theta$。若a、b平行，高为0，叉积就是零向量，此时无法用它提供一个确定的法向方向。',
'方向由右手规则决定：右手四指从a按小于或等于180°的夹角方向转向b，拇指指向叉积。交换顺序会反向，所以 $b\\times a=-(a\\times b)$。这与点积的交换律不同。']],
['叉积坐标：把三个分量逐一写出来',[
'设 $a=(a_1,a_2,a_3),b=(b_1,b_2,b_3)$。叉积为 $(a_2b_3-a_3b_2,\\ a_3b_1-a_1b_3,\\ a_1b_2-a_2b_1)$。下标1、2、3依次表示x、y、z分量；特别注意中间分量的顺序。',
'例：$a=(1,1,0),b=(1,0,1)$。第一分量 $1\\times1-0\\times0=1$；第二分量 $0\\times1-1\\times1=-1$；第三分量 $1\\times0-1\\times1=-1$。所以 $a\\times b=(1,-1,-1)$。',
'验证垂直：$(1,-1,-1)\\cdot(1,1,0)=1-1+0=0$，与b点乘也为 $1+0-1=0$。长度为 $\\sqrt{1+1+1}=\\sqrt3$，这是平行四边形面积；三角形面积要再除以2，为 $\\sqrt3/2$。']],
['混合积：底面积如何变成体积？',[
'$a\\cdot(b\\times c)$ 叫混合积，先在括号里做叉积，再做点积，结果是一个数。$b\\times c$ 提供底面面积和法向方向；a在法向上的有向分量提供高度。因此混合积给出有向体积，普通平行六面体体积是 $V=|a\\cdot(b\\times c)|$。',
'取 $a=(3,0,0),b=(0,2,0),c=(0,0,h)$。$b\\times c=(2h,0,0)$，与a点乘得到 $3(2h)=6h$。当 $h=2$ 时体积为12；当 $h=0$ 时三个向量共面，体积为0。',
'同一顶点发出的三条边构成的四面体，体积是上述平行六面体的 $1/6$。不要把三角形的“除以2”和四面体的“除以6”混在一起。混合积为0只说明线性相关或共面，不要求其中一定有零向量。']]],check:'底面不变，把h从1拖到2：面积仍为6，平行六面体体积从6变成12。'},
matrix:{name:'矩阵的两列，就是两根基向量的新位置',slider:['剪切系数 s',-1,1.5,.5,.1],observe:'灰色虚线是原单位正方形，绿色是变换后区域。e₁固定，e₂变为(s,1)。观察方格怎样倾斜，而不是只记四个数字。',blocks:[
['矩阵既是一张表，也能表示一个变换',[
'm行n列矩阵就是把 $mn$ 个数排成一个长方形，用大写字母A表示。元素 $a_{ij}$ 的第一个下标i是行号，第二个j是列号；例如 $a_{21}$ 是第2行第1列。矩阵的尺寸很重要，不能把2×3与3×2混为一谈。',
'当A为2×2、$x=(x_1,x_2)^T$ 为列向量时，$y=Ax$ 把一个平面向量变成另一个。上标T表示转置，这里只是把横着写的坐标竖起来。我们采用列向量约定，矩阵放在向量左侧。',
'令 $A=\\begin{pmatrix}2&1\\\\0&1\\end{pmatrix}$。则 $Ax=(2x_1+x_2,x_2)^T$。将 $x=(3,2)^T$ 代入：第一坐标 $2\\times3+1\\times2=8$，第二坐标 $0\\times3+1\\times2=2$，得到 $(8,2)^T$。']],
['为什么看两列就能理解整个变换？',[
'平面的两个标准基向量为 $e_1=(1,0)^T,e_2=(0,1)^T$，任意x都可以拆成 $x=x_1e_1+x_2e_2$。线性变换保持相加和数乘，所以 $Ax=x_1Ae_1+x_2Ae_2$。',
'直接相乘可见 $Ae_1$ 就是A的第一列，$Ae_2$ 就是第二列。因此矩阵的每一列都在告诉你：一根原坐标方向被送到了哪里。知道两根基向量的新位置，就能通过组合得到任意向量的新位置。',
'图中 $S=\\begin{pmatrix}1&s\\\\0&1\\end{pmatrix}$，第一列是 $(1,0)^T$，第二列是 $(s,1)^T$。因此 $S(x,y)^T=(x+sy,y)^T$：越高的点横向移动越多，高度不变。这种变换叫剪切。']],
['矩阵乘法：为什么要“行乘列”？',[
'设先执行B，再执行A，最终向量是 $A(Bx)=(AB)x$，所以AB表示两次变换的合成，最右边先作用。若A是m×n、B是n×p，B的每一列有n个数，才能作为A的输入，因此中间尺寸n必须相同；结果为m×p。',
'例：$A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix},B=\\begin{pmatrix}2&0\\\\1&3\\end{pmatrix}$。AB第1列是 $A(2,1)^T=(4,1)^T$，第2列是 $A(0,3)^T=(6,3)^T$，故 $AB=\\begin{pmatrix}4&6\\\\1&3\\end{pmatrix}$。',
'一般地，$(AB)_{ij}=\\sum_{k=1}^{n}a_{ik}b_{kj}$。“Σ”表示求和，k依次取1到n：固定A第i行、B第j列，对应相乘再相加。不是同位置元素相乘，也不能默认AB=BA。先旋转再拉伸，与先拉伸再旋转，通常不同。']]],check:'s=1时，(2,1)变成(3,1)。用矩阵乘法和“横向多走s×高度”两种方式各算一遍。'},
rotation:{name:'旋转保持长度；逆矩阵负责把变化撤销',slider:['逆时针旋转角度 θ（度）',-180,180,45,1],observe:'灰色是原来的两根单位基向量；绿色和蓝色是旋转后的两列。箭头都绕原点转动，长度始终为1。',blocks:[
['先从高中三角函数推导旋转矩阵',[
'$e_1=(1,0)^T$ 在单位圆的最右端，逆时针旋转θ后为 $(\\cos\\theta,\\sin\\theta)^T$。$e_2$ 原本比 $e_1$ 超前90°，所以转完后是 $(\\cos(\\theta+\\pi/2),\\sin(\\theta+\\pi/2))^T=(-\\sin\\theta,\\cos\\theta)^T$。',
'把两根基向量的新位置按列排列，得到 $R_\\theta=\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}$。因此旋转后的坐标是 $x^{\\prime}=x\\cos\\theta-y\\sin\\theta$、$y^{\\prime}=x\\sin\\theta+y\\cos\\theta$，不是每个坐标都单独乘余弦。',
'θ=90°时，余弦为0、正弦为1，于是 $(x,y)$ 变为 $(-y,x)$。例如 $(2,-1)$ 变成 $(1,2)$。检查两个长度平方：原来 $2^2+(-1)^2=5$，转完 $1^2+2^2=5$，旋转没有拉长向量。']],
['转置：只是交换行列，为什么乘积要倒序？',[
'$A^T$ 把A的行改成列，定义 $(A^T)_{ij}=a_{ji}$。例如 $A=\\begin{pmatrix}1&2&3\\\\4&5&6\\end{pmatrix}$，转置为 $\\begin{pmatrix}1&4\\\\2&5\\\\3&6\\end{pmatrix}$，尺寸从2×3变为3×2。',
'转置两次回到原矩阵；$(AB)^T=B^TA^T$。可用下标检查：左边第ij项为 $(AB)_{ji}=\\sum_k a_{jk}b_{ki}$；右边第ij项为 $\\sum_k (B^T)_{ik}(A^T)_{kj}=\\sum_k b_{ki}a_{jk}$，每一项相同。顺序倒过来是尺寸和下标共同决定的。']],
['逆矩阵：怎样把一个动作“倒回去”？',[
'单位矩阵I主对角线上都是1，其余为0，满足 $Ix=x$。若方阵A存在矩阵B使 $AB=BA=I$，就称B为A的逆，记 $A^{-1}$。它表示撤销A的作用；不是对A每一个元素取倒数。',
'旋转θ的撤销动作是旋转−θ，因此 $R_\\theta^{-1}=R_{-\\theta}=R_\\theta^T$。这依赖旋转保持长度与角度。对一般矩阵，转置与逆并不相同。',
'例如剪切 $S=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$ 把 $(x,y)$ 送到 $(x+2y,y)$。要撤销，就从新横坐标减去2倍高度，因此 $S^{-1}=\\begin{pmatrix}1&-2\\\\0&1\\end{pmatrix}$。相乘右上角为 $1\\times(-2)+2\\times1=0$，其余三项为1、0、1，确为I。',
'如果先做B再做A，撤销时要先撤销A，再撤销B，所以 $(AB)^{-1}=B^{-1}A^{-1}$。检查：$(AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=AA^{-1}=I$。']]],check:'把角度拖到−90°：e₁应向下，e₂应向右。再旋转90°就能回到原位置。'},
det:{name:'行列式测量有向面积怎样变化',slider:['第二列的高度 h',-2,2,1,.1],observe:'两列为a=(2,0)、b=(1,h)。填色平行四边形的普通面积是2|h|；行列式是2h，保留方向的正负。h=0时图形压成一条线。',blocks:[
['为什么矩阵还需要一个“行列式”？',[
'矩阵有很多元素，但我们常只想快速判断：它把面积放大多少？有没有把平面压扁，使不同输入落到同一个输出？行列式用一个数回答这些问题。对 $A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$，定义 $\\det A=ad-bc$，也记为 $|A|$。矩阵用括号，行列式用竖线；向量的竖线表示长度，要结合对象区分。',
'A把两根标准基向量变为 $(a,c)$ 与 $(b,d)$。这两列张成平行四边形，行列式给出它的有向面积；普通面积要取绝对值。正号表示基向量顺序保持逆时针方向，负号表示方向翻转；它不是说“面积小于0”。']],
['二阶公式ad−bc怎样与面积联系？',[
'【补充讲解】将两列补上第三坐标0：$u=(a,c,0),v=(b,d,0)$。由叉积坐标公式，$u\\times v=(0,0,ad-cb)$。叉积长度就是平行四边形面积，所以面积为 $|ad-bc|$；保留z方向的正负，就得到有向面积 $ad-bc$。',
'例：$A=\\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}$，两列为 $(2,0)$、$(1,3)$。底为2，高为3，面积为6；公式也给出 $2\\times3-1\\times0=6$。图中将高度改成h，公式变为 $2h$。当h从正变负时，普通面积可以相同，但方向翻转。']],
['为0为什么意味着不可逆？',[
'二阶行列式为0时，两列共线，原单位正方形被压到一条线，甚至一个点。不同的输入可能到达同一个输出；只看到输出，就无法唯一找回输入，因此不存在逆矩阵。例：$A=\\begin{pmatrix}1&2\\\\0&0\\end{pmatrix}$ 把 $(2,0)$ 和 $(0,1)$ 都送到 $(2,0)$。',
'对任意n阶方阵，都有“可逆当且仅当行列式非零”。但长方形矩阵不能直接套用这个普通行列式和双侧逆判据。三阶行列式对应有向体积，绝对值给出单位立方体变换后的体积。']],
['考试常用性质：记住变化发生在几行',[
'交换两行，行列式变号；某一行乘k，行列式乘k；把一行的k倍加到另一行，行列式不变。这三条描述的是行列式的变化，不代表所有行操作都保持行列式不变。',
'若整个n阶矩阵乘k，则n行都乘k，所以 $\\det(kA)=k^n\\det A$。例：A为3阶且 $\\det A=2$，$\\det(2A)=2^3\\times2=16$；不能算成4。',
'上三角或下三角矩阵的行列式等于对角元素之积。例如对角线为2、−1、3，结果是−6。还有 $\\det(AB)=\\det A\\det B$、可逆时 $\\det(A^{-1})=1/\\det A$。一般没有 $\\det(A+B)=\\det A+\\det B$。']]],check:'先拖到h=−1，再拖到h=0：有向面积依次为−2、0；后者不能恢复整个平面的输入。'},
block:{name:'先分成块，再逐块撤销',slider:['左上对角块 s',1,4,2,1],observe:'颜色区分一个1×1块和一个2×2块。A逆的左上块是1/s，右下块是B逆。块之外的0必须保留，不能随意拼接不匹配的矩阵。',blocks:[
['伴随矩阵：把“删行删列”的步骤说清楚',[
'对n阶方阵A，删去第i行、第j列后，剩下的 $(n-1)$ 阶矩阵的行列式叫余子式 $M_{ij}$。乘上符号 $(-1)^{i+j}$ 后得到代数余子式 $C_{ij}$。符号像棋盘：第一行为正、负、正，第二行为负、正、负。',
'将所有 $C_{ij}$ 按原位置排好，再转置，得到伴随矩阵 $\\operatorname{adj}A=(C_{ij})^T$。它满足 $A\\operatorname{adj}A=(\\det A)I$。当 $\\det A\\ne0$ 时，两边除以行列式，就得到 $A^{-1}=\\operatorname{adj}A/\\det A$。伴随矩阵与逆矩阵只在行列式为1时相同。']],
['二阶求逆：交换、变号、相除分别从哪里来？',[
'令 $A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$。删第1行第1列留下d，所以 $C_{11}=d$；删第1行第2列留下c，但符号为负，所以 $C_{12}=-c$；同理 $C_{21}=-b,C_{22}=a$。',
'代数余子式矩阵是 $\\begin{pmatrix}d&-c\\\\-b&a\\end{pmatrix}$，转置后为 $\\operatorname{adj}A=\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$。所以 $A^{-1}=\\frac1{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$，前提 $ad-bc\\ne0$。',
'例：$A=\\begin{pmatrix}2&1\\\\1&3\\end{pmatrix}$。先求 $\\det A=2\\times3-1\\times1=5$，再得 $A^{-1}=\\frac15\\begin{pmatrix}3&-1\\\\-1&2\\end{pmatrix}$。分母5要作用到每个元素，不能只除对角线。',
'检查乘回原矩阵：左上 $2(3/5)+1(-1/5)=1$；右上 $2(-1/5)+1(2/5)=0$；左下 $1(3/5)+3(-1/5)=0$；右下 $1(-1/5)+3(2/5)=1$。四个位置分别是1、0、0、1，确为I。']],
['分块不是新运算，而是把原运算打包',[
'把矩阵分成若干子矩阵，称为分块。每个块仍然有自己的行列尺寸。块矩阵相加、相乘必须满足尺寸匹配；乘法仍按“块行乘块列”，块的先后顺序不能交换。',
'对于分块对角阵 $A=\\begin{pmatrix}P&0\\\\0&Q\\end{pmatrix}$，若P、Q均可逆，则 $A^{-1}=\\begin{pmatrix}P^{-1}&0\\\\0&Q^{-1}\\end{pmatrix}$。因为相乘左上为 $PP^{-1}=I$，右下为 $QQ^{-1}=I$，其余两块为0。',
'图中P是单个数s对应的1×1矩阵，$B=\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}$。$\\det B=2$，所以 $B^{-1}=\\frac12\\begin{pmatrix}2&-1\\\\0&1\\end{pmatrix}=\\begin{pmatrix}1&-1/2\\\\0&1/2\\end{pmatrix}$。再把 $1/s$ 与这个2×2块放回各自位置，就得到3×3的A逆。',
'分块对角阵的行列式为 $\\det P\\det Q$，本例为 $2s$。这里要求非对角块为0；一般分块矩阵不能直接把每一块取逆当作整体的逆，也不能把行列式简单相乘。']]],check:'取s=2：A逆左上元素是1/2，右下2×2块仍为(1,−1/2;0,1/2)，整体行列式的倒数为1/4。'}
};
function firstGuideHTML(l,helpers){const {esc,rich,P}=helpers;const g=window.FIRST_GUIDES[l.id];if(!g)return '';const[label,min,max,value,step]=g.slider;return `<section class="first-guide" aria-label="${esc(l.title)}图解细讲"><div class="first-guide-header"><span class="eyebrow">补充讲解 · 零基础图解</span><h2>${g.name}</h2><p>先看图，再按下面的小步骤读公式；原讲义例题与12道练习仍在后面。</p></div><figure class="first-figure" data-first-figure="${l.id}"><label>${label}<input type="range" min="${min}" max="${max}" value="${value}" step="${step}" aria-label="${label}"><output>${value}</output></label><div class="first-svg"></div><p class="first-result" role="status" aria-live="polite"></p><figcaption>${g.observe}</figcaption></figure>${g.blocks.map(([t,ps],i)=>`<section class="first-explanation"><h3>${i+1}. ${t}</h3>${ps.map(p=>P(p)).join('')}</section>`).join('')}<div class="tip"><strong>看图自检：</strong>${rich(g.check)}</div></section>`;}
window.firstGuideHTML=firstGuideHTML;
function drawFirstFigure(el){const id=el.dataset.firstFigure,v=Number(el.querySelector('input').value),green='#176c58',blue='#347bae',orange='#b05c20';let body='',out='';const n=x=>Math.abs(x)<1e-8?'0':Number(x.toFixed(2)).toString();const xy=(x,y)=>[230+48*x,215-48*y];const text=(x,y,t,c='#293e36')=>`<text x="${x}" y="${y}" fill="${c}" font-size="14">${t}</text>`;const line=(a,b,c='#a8b5af',dash='')=>`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${c}" stroke-width="2" ${dash?`stroke-dasharray="${dash}"`:''}/>`;const arrow=(a,b,c=green)=>{const dx=b[0]-a[0],dy=b[1]-a[1],q=Math.hypot(dx,dy);if(q<.1)return `<circle cx="${a[0]}" cy="${a[1]}" r="4" fill="${c}"/>`;const ux=dx/q,uy=dy/q;return line(a,b,c)+`<polygon points="${b[0]},${b[1]} ${b[0]-10*ux+4*uy},${b[1]-10*uy-4*ux} ${b[0]-10*ux-4*uy},${b[1]-10*uy+4*ux}" fill="${c}"/>`;};const poly=(pts,color=green)=>`<polygon points="${pts.map(p=>p.join(',')).join(' ')}" fill="${color}22" stroke="${color}" stroke-width="2"/>`;const origin=xy(0,0);if(id!=='block'&&id!=='cross'){for(let x=-4;x<=5;x++)body+=line(xy(x,-2),xy(x,3),'#e4eae6');for(let y=-2;y<=3;y++)body+=line(xy(-4,y),xy(5,y),'#e4eae6');body+=arrow(xy(-4,0),xy(5,0),'#879c92')+arrow(xy(0,-2),xy(0,3),'#879c92')+text(477,235,'x')+text(239,65,'y')+text(214,234,'O');for(const x of[-3,-2,-1,1,2,3,4])body+=text(xy(x,0)[0]-5,234,String(x),'#708177');}
if(id==='vector'){body+=arrow(origin,xy(2,1),green)+arrow([origin[0],origin[1]+4],xy(2*v,v),blue)+line(xy(2,1),xy(2,0),green,'4 4')+line(xy(2,0),origin,green,'4 4')+text(335,150,'a=(2,1)',green)+text(28,30,'绿色：a　蓝色：λa',blue);out=`λ=${n(v)}，λa=(${n(2*v)},${n(v)})；|λa|=|λ|√5≈${n(Math.abs(v)*Math.sqrt(5))}。${v<0?'方向相反。':v===0?'得到零向量，没有确定方向。':'方向相同。'}`;}
if(id==='dot'){const t=v*Math.PI/180,b=[2*Math.cos(t),2*Math.sin(t)],p=[b[0],0];body+=arrow(origin,xy(3,0),green)+arrow(origin,xy(...b),blue)+line(xy(...b),xy(...p),blue,'5 4')+arrow([origin[0],origin[1]+7],[xy(...p)[0],origin[1]+7],orange)+text(28,30,'绿：a　蓝：b　橙：投影p');out=`θ=${v}°，a·b=6cosθ=${n(6*Math.cos(t))}；p=(${n(b[0])},0)，有向标量投影=${n(b[0])}，投影长度=${n(Math.abs(b[0]))}。`;}
if(id==='matrix'){const o=xy(0,0),a=xy(1,0),b=xy(v,1),ab=xy(1+v,1);body+=poly([o,xy(1,0),xy(1,1),xy(0,1)],'#a7b5b0')+poly([o,a,ab,b])+arrow(o,a,green)+arrow(o,b,blue)+text(30,30,'灰：原单位正方形　绿：剪切后的图形');for(let j=1;j<=2;j++)body+=line(xy(-1+j*v,j),xy(2+j*v,j),green);body+=text(b[0]+8,b[1]-10,`Se₂=(${n(v)},1)`,blue);out=`S=[[1,${n(v)}],[0,1]]；Se₁=(1,0)，Se₂=(${n(v)},1)。例：(2,1) → (${n(2+v)},1)。面积倍率detS=1，不变。`;}
if(id==='rotation'){const t=v*Math.PI/180,a=[Math.cos(t),Math.sin(t)],b=[-Math.sin(t),Math.cos(t)];body+=`<circle cx="230" cy="215" r="48" fill="none" stroke="#c5d4cc"/>`+arrow(origin,xy(1,0),'#9eaaa5')+arrow(origin,xy(0,1),'#9eaaa5')+arrow(origin,xy(...a),green)+arrow(origin,xy(...b),blue)+text(30,30,'绿：Re₁　蓝：Re₂　圆的半径为1');out=`θ=${v}°；第一列=(${n(a[0])},${n(a[1])})，第二列=(${n(b[0])},${n(b[1])})。两列长度都为1，点积为0；逆变换旋转${-v}°。`;}
if(id==='det'){body+=poly([origin,xy(2,0),xy(3,v),xy(1,v)],v>=0?green:orange)+arrow(origin,xy(2,0),green)+arrow(origin,xy(1,v),blue)+line(xy(1,v),xy(1,0),blue,'4 4')+text(30,30,'绿：第一列(2,0)　蓝：第二列(1,h)');out=`h=${n(v)}，detA=2×h−1×0=${n(2*v)}；普通面积=${n(2*Math.abs(v))}。${v===0?'面积为0，变换不可逆。':v>0?'方向保持，变换可逆。':'方向翻转，变换可逆。'}`;}
if(id==='cross'){const p=(x,y,z)=>[90+85*x+40*y,290-23*y-60*z];const o=p(0,0,0),a=p(3,0,0),b=p(0,2,0),ab=p(3,2,0),oz=p(0,0,v),az=p(3,0,v),bz=p(0,2,v),abz=p(3,2,v);body+=poly([o,a,ab,b])+poly([oz,az,abz,bz],blue);for(const[p1,p2]of[[o,oz],[a,az],[b,bz],[ab,abz]])body+=line(p1,p2,blue);body+=arrow(o,a,green)+arrow(o,b,green)+arrow(o,oz,orange)+text(30,28,'斜投影示意：底面3×2，高h')+text(230,310,'a=(3,0,0)',green)+text(18,240,'b=(0,2,0)',green)+text(100,oz[1]-12,`c=(0,0,${n(v)})`,orange);out=`底面叉积a×b=(0,0,6)，面积=6；有向体积(a×b)·c=6h=${n(6*v)}，四面体体积=6h/6=${n(v)}。`;}
if(id==='block'){const cell=(x,y,t,color)=>`<rect x="${x}" y="${y}" width="52" height="45" rx="3" fill="${color}20" stroke="${color}"/>`+text(x+12,y+28,t,color);const mat=(x,y,vals)=>vals.map((r,i)=>r.map((t,j)=>cell(x+54*j,y+47*i,t,i===0&&j===0?orange:i>0&&j>0?green:'#a0aba5')).join('')).join('');body+=text(55,60,'A：两个对角块')+mat(40,80,[[String(v),'0','0'],['0','1','1'],['0','0','2']])+text(323,60,'A⁻¹：分别求逆')+mat(310,80,[[v===1?'1':`1/${v}`,'0','0'],['0','1','−1/2'],['0','0','1/2']])+text(215,157,'→',blue)+text(40,270,'橙色块：乘回去得到1')+text(40,295,'绿色块：乘回去得到2阶单位矩阵');out=`s=${v}，detA=2s=${2*v}；det(A⁻¹)=1/${2*v}。左上块的逆是1/s=${n(1/v)}，右下块的逆不随s改变。`;}
el.querySelector('output').textContent=n(v);el.querySelector('.first-svg').innerHTML=`<svg viewBox="0 0 520 340" role="img" aria-label="${window.FIRST_GUIDES[id].name}"><title>${window.FIRST_GUIDES[id].name}</title>${body}</svg>`;el.querySelector('.first-result').textContent=out;}
window.initFirstGuides=()=>document.querySelectorAll('[data-first-figure]').forEach(drawFirstFigure);
document.addEventListener('input',e=>{const el=e.target.closest('[data-first-figure]');if(el)drawFirstFigure(el);});
