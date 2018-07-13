/**
 * 深圳坐标系转换类
 * Created by haibalai on 2015/6/14.
 */
var LocateTool = function(){

    var alpha_1 = 6378140.00;
    var e2_1 = 0.006694384999588;
    var ea2_1 = 0.006739501819473;
    var C0_1 = 6367452.13279;
    var C1_1 = 32009.8575;
    var C2_1 = 113.9602;
    var C3_1 = 0.6976;

    var alpha_2 = 6378245.00;
    var e2_2 = 0.00669342162297;
    var ea2_2 = 0.00673852541468;
    var C0_2 = 6367558.49686;
    var C1_2 = 32005.79642;
    var C2_2 = 133.06115;
    var C3_2 = 0.7031;

    var COEF2 = 0.5;
    var COEF6 = 0.166666666667;
    var COEF12 = 0.0833333333333;
    var COEF30 = 0.0333333333333;
    var COEF120 = 0.00833333333333;

    var GA = -2465703.449;
    var GB = -433214.6651 - 60.00;
    var GC = 0.9998630461;
    var GD = -0.01708078513;

    var PI180 = Math.PI / 180.00;

    function DEG_TO_RAD(a)
    {
        var result = 0;
        result = ((a) * PI180);

        return result;
    }

    function Length_2D(x, y)
    {
        var result = 0;

        result = Math.sqrt(x * x + y * y);

        return result;
    }

    function Distance_2D(x1, y1, x2, y2)
    {
        return Length_2D((x2 - x1), (y2 - y1));
    }

    this.GpsCvtBL2XY = function( b, l, c, mode)
    {
        var xs,ys;
        var BB, LL;
        var sinB, cosB, sinB2;
        var t, t2, n2, n;

        var m0, m02;
        var X0B, tmp, xg, yg;
        var alpha, e2, ea2;
        var C0, C1, C2, C3;


        if (mode == 0)
        {
            alpha = alpha_1;
            e2 = e2_1;
            ea2 = ea2_1;
            C0 = C0_1;
            C1 = C1_1;
            C2 = C2_1;
            C3 = C3_1;
        }
        else
        {
            alpha = alpha_2;
            e2 = e2_2;
            ea2 = ea2_2;
            C0 = C0_2;
            C1 = C1_2;
            C2 = C2_2;
            C3 = C3_2;
        }

        BB = DEG_TO_RAD(b);
        LL = DEG_TO_RAD(l - c);
        t = Math.tan(BB);
        sinB = Math.sin(BB);
        cosB = Math.cos(BB);
        sinB2 = sinB * sinB;



        t2 = t * t;
        n2 = ea2 * cosB * cosB;
        n = alpha  / Math.sqrt(1.00 - e2 * sinB2);



        m0 = LL * cosB;
        m02 = m0 * m0;
        X0B = C0 * BB - cosB * sinB * (C1 + sinB2 * (C2 + C3 * sinB2));
        tmp = COEF30 * m02 * (61.00 + t2 * (-58.00 + t2));
        tmp = COEF12 * m02 * (5.00 - t2 + n2 * (9.00 + 4.00 * n2) + tmp);

        xg = X0B + COEF2 * n * t * m02 * (1.00 + tmp);
        tmp = t2 * (-18.00 + t2) + n2 * (14.00 - 58.00 * t2);
        tmp = COEF120 * m02 * m02 * (5.00 + tmp);
        tmp = COEF6 * m02 * (1.00 - t2 + n2) + tmp;

        yg = n * m0 * (1.00 + tmp) + 500000.00;
        xs = GA + xg * GC + yg * GD;
        ys = GB + yg * GC - xg * GD;
        var m_point=[{"X":xs,"Y":ys}]
        return m_point;
    }

   


}