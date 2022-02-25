__NUXT_JSONP__("/%E9%82%A3%E4%BA%9B%E6%9D%80%E4%B8%8D%E6%AD%BB%E6%88%91%E7%9A%84/2019-08-28_CSharp%20%E5%A6%82%E4%BD%95%E5%9C%A8%E4%BA%94%E5%88%86%E9%92%9F%E4%B9%8B%E5%86%85%E6%84%89%E5%BF%AB%E5%9C%B0%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8%20log4net", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi){return {data:[{article:{slug:"2019-08-28_CSharp 如何在五分钟之内愉快地开始使用 log4net",toc:[{id:J,depth:ac,text:J},{id:K,depth:ac,text:K},{id:L,depth:G,text:L},{id:M,depth:G,text:M},{id:N,depth:G,text:N},{id:O,depth:G,text:O},{id:P,depth:G,text:P},{id:ag,depth:ac,text:ah}],body:{type:H,children:[{type:b,tag:ad,props:{id:J},children:[{type:b,tag:s,props:{href:"#%E7%AE%80%E5%8D%95%E6%9D%A5%E8%AF%B4",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:J}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"据说："}]},{type:a,value:e},{type:b,tag:"blockquote",props:{},children:[{type:a,value:e},{type:b,tag:q,props:{},children:[{type:b,tag:s,props:{href:ai,rel:[aj,ak,al],target:am},children:[{type:a,value:"Inserting log requests into the application code requires a fair amount of planning and effort."}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"但这不准确，对于我们彩笔玩家而言，输出 log 就好比必要时人们戴的无镜片眼镜一样，往往只是为了好看。"}]},{type:a,value:e},{type:b,tag:ad,props:{id:K},children:[{type:b,tag:s,props:{href:"#%E5%85%B1%E4%BA%94%E5%88%86%E9%92%9F",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:K}]},{type:a,value:e},{type:b,tag:I,props:{id:L},children:[{type:b,tag:s,props:{href:"#%E7%AC%AC%E4%B8%80%E5%88%86%E9%92%9F",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:L}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"打开"},{type:b,tag:s,props:{href:ai,rel:[aj,ak,al],target:am},children:[{type:a,value:"这个"}]},{type:a,value:"网页。"}]},{type:a,value:e},{type:b,tag:I,props:{id:M},children:[{type:b,tag:s,props:{href:"#%E7%AC%AC%E4%BA%8C%E5%88%86%E9%92%9F",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:M}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"假设刚好你的项目也是个 "},{type:b,tag:l,props:{},children:[{type:a,value:"ConsoleApplication"}]},{type:a,value:an},{type:b,tag:l,props:{},children:[{type:a,value:"WindowsFormsApplication"}]},{type:a,value:"，那么这时："}]},{type:a,value:e},{type:b,tag:"ol",props:{},children:[{type:a,value:e},{type:b,tag:Q,props:{},children:[{type:a,value:"按下 "},{type:b,tag:l,props:{},children:[{type:a,value:"shift"}]},{type:a,value:ao},{type:b,tag:l,props:{},children:[{type:a,value:"ctrl"}]},{type:a,value:ao},{type:b,tag:l,props:{},children:[{type:a,value:"A"}]}]},{type:a,value:e},{type:b,tag:Q,props:{},children:[{type:a,value:"左侧展开 "},{type:b,tag:"em",props:{},children:[{type:a,value:"Visual C#"}]},{type:a,value:" 项大纲，点击 "},{type:b,tag:l,props:{},children:[{type:a,value:"常规"}]},{type:a,value:"，在右侧的具体项中找到 "},{type:b,tag:l,props:{},children:[{type:a,value:"应用程序配置文件"}]}]},{type:a,value:e},{type:b,tag:Q,props:{},children:[{type:a,value:"绞尽脑汁为配置文件起一个美妙的名字，虽然大家都习惯性地叫它 "},{type:b,tag:l,props:{},children:[{type:a,value:ae}]}]},{type:a,value:e},{type:b,tag:Q,props:{},children:[{type:a,value:"点击 "},{type:b,tag:l,props:{},children:[{type:a,value:"添加"}]},{type:a,value:" 按钮"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:I,props:{id:N},children:[{type:b,tag:s,props:{href:"#%E7%AC%AC%E4%B8%89%E5%88%86%E9%92%9F",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:N}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"这时，从之前打开的网页中，复制类似于："}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A],style:B},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:R}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:S}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:T}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:U}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:V}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:E}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:ap}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aq}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:ar}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:p}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:as}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:at}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:p}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:au}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:av}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:p}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aw}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:ax}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:p}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:ay}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:az}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:p}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aA}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aB}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aC}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aD}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:W}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:E}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aE}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aF}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aG}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aH}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:p}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aI}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:W}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:X}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:T}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:H}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aK}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:p}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aL}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aM}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:V}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:p}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:X}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:H}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:Y}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:S}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]}]}]}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"以及："}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A],style:B},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:R}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:Z}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aN}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:U}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aO}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:E}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aP}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:Y}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:Z}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]}]}]}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"的内容到方才新建的一般被叫做 "},{type:b,tag:l,props:{},children:[{type:a,value:ae}]},{type:a,value:" 的配置文件的 "},{type:b,tag:l,props:{},children:[{type:a,value:aQ}]},{type:a,value:" 中，之后我们的配置文件看起来像这样："}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A],style:B},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"\u003C?"}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"xml"}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:" version"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"\"1.0\""}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:" encoding"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"\"utf-8\""}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:" ?\u003E"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:R}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aR}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:af}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:Z}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aN}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:U}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aO}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:E}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aP}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aS}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:Z}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:af}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:S}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:T}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:U}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:V}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:E}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:ap}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aq}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:ar}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:p}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:as}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:at}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:p}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:au}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:av}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:p}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aw}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:ax}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:p}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:ay}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:az}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:p}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aA}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aB}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aC}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aD}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:W}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:E}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aE}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aF}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aG}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aH}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:p}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aI}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:W}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:X}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:T}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:H}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aK}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:p}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aL}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aM}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:V}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:p}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:X}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:H}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aS}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:S}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:Y}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aR}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]}]}]}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"假设你恰好也更关注日志的本地输出，那么这时我们需要绞尽新的脑汁，思考一下将输出的日志文件的名字，以及日志的输出样式，以及日志输出的位置。如上的配置文件随后将输出的日志文件的名称是当前 "},{type:b,tag:l,props:{},children:[{type:a,value:"年年年年月月日日"}]},{type:a,value:aT},{type:b,tag:l,props:{},children:[{type:a,value:"下划线"}]},{type:a,value:aT},{type:b,tag:l,props:{},children:[{type:a,value:"record.log"}]},{type:a,value:"，之所以有斜杠是因为 "},{type:b,tag:l,props:{},children:[{type:a,value:"g"}]},{type:a,value:" 以及 "},{type:b,tag:l,props:{},children:[{type:a,value:"d"}]},{type:a,value:" 在 "},{type:b,tag:l,props:{},children:[{type:a,value:"DatePattern "}]},{type:a,value:" 中会被转义。这时我们的日志样式差不多像这样："}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A],style:B},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:g},children:[{type:a,value:aU}]},{type:b,tag:c,props:{style:r},children:[{type:a,value:F}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aV}]},{type:b,tag:c,props:{style:r},children:[{type:a,value:F}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aW}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aX}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:_}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aY}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:_}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aZ}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:a_}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:a$}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:ba}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:bb}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:bc}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:bd}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:be}]},{type:b,tag:c,props:{style:r},children:[{type:a,value:F}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:bf}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]}]}]}]},{type:a,value:e},{type:b,tag:I,props:{id:O},children:[{type:b,tag:s,props:{href:"#%E7%AC%AC%E5%9B%9B%E5%88%86%E9%92%9F",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:O}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"配置文件已经就绪，差不多了。打开 "},{type:b,tag:l,props:{},children:[{type:a,value:"App.config"}]},{type:a,value:an},{type:b,tag:l,props:{},children:[{type:a,value:"app.config"}]},{type:a,value:"，在 "},{type:b,tag:l,props:{},children:[{type:a,value:aQ}]},{type:a,value:" 中添加类似于："}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A],style:B},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:R}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:bg}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:af}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"add"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"key"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"\"log4net.Config\""}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:o}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"\"..\u002F..\u002Flog4net.config\""}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:Y}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:bg}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]}]}]}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"的 appSettings。若按上述新建 "},{type:b,tag:l,props:{},children:[{type:a,value:ae}]},{type:a,value:"，则 log4net.Config 对应的 "},{type:b,tag:l,props:{},children:[{type:a,value:o}]},{type:a,value:" 是 \"..\u002F..\u002Flog4net.config\"，这个相对路径是相对于项目下 "},{type:b,tag:l,props:{},children:[{type:a,value:"bin\\Debug"}]},{type:a,value:" 而言的，之前的日志输出路径也是同理。"}]},{type:a,value:e},{type:b,tag:I,props:{id:P},children:[{type:b,tag:s,props:{href:"#%E7%AC%AC%E4%BA%94%E5%88%86%E9%92%9F",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:P}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"假设我们的类一如既往地叫“Program”，那么一次华丽地日志输出将类似于："}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A],style:B},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:r},children:[{type:a,value:"private"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:r},children:[{type:a,value:bh}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:r},children:[{type:a,value:"readonly"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:$},children:[{type:a,value:"ILog"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:$},children:[{type:a,value:"log"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:r},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:" LogManager."}]},{type:b,tag:c,props:{style:aa},children:[{type:a,value:"GetLogger"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:ab}]},{type:b,tag:c,props:{style:r},children:[{type:a,value:"typeof"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:ab}]},{type:b,tag:c,props:{style:$},children:[{type:a,value:"Program"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:"));"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:r},children:[{type:a,value:bh}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:r},children:[{type:a,value:"void"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:aa},children:[{type:a,value:"Main"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:ab}]},{type:b,tag:c,props:{style:r},children:[{type:a,value:"string"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:"[] "}]},{type:b,tag:c,props:{style:$},children:[{type:a,value:"args"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:")"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"{"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"    log."}]},{type:b,tag:c,props:{style:aa},children:[{type:a,value:"Debug"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:ab}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"\"test\""}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:");"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"    Console."}]},{type:b,tag:c,props:{style:aa},children:[{type:a,value:"ReadLine"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:"();"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"}"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]}]}]}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"当然，输出的日志叫 "},{type:b,tag:l,props:{},children:[{type:a,value:"20190828_record.log"}]},{type:a,value:"，输出的内容类似于："}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A],style:B},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:g},children:[{type:a,value:aU}]},{type:b,tag:c,props:{style:r},children:[{type:a,value:F}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aV}]},{type:b,tag:c,props:{style:r},children:[{type:a,value:F}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aW}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aX}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:_}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aY}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:_}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aZ}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:a_}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:a$}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:ba}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:bb}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:bc}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:bd}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:be}]},{type:b,tag:c,props:{style:r},children:[{type:a,value:F}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:bf}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]}]}]}]},{type:a,value:e},{type:b,tag:ad,props:{id:ag},children:[{type:b,tag:s,props:{href:"#time-up",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:ah}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"就酱。"}]}]},dir:"\u002F那些杀不死我的",path:"\u002F那些杀不死我的\u002F2019-08-28_CSharp 如何在五分钟之内愉快地开始使用 log4net",extension:".md",createdAt:bi,updatedAt:bi},articles:[]}],fetch:{},mutations:[]}}("text","element","span","color: #24292F","\n","line","color: #0550AE","color: #116329"," ","=","color: #0A3069","code","\u003E","      \u003C","value"," \u002F\u003E","p","color: #CF222E","a","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","shiki","background-color: #ffffff","\u002F\u003E","    \u003C","type","-",3,"root","h3","简单来说","共五分钟","第一分钟","第二分钟","第三分钟","第四分钟","第五分钟","li","\u003C","log4net","appender","name","\"RollingFile\"","layout","    \u003C\u002F","\u003C\u002F","configSections",":","color: #953800","color: #8250DF","(",2,"h2","log4net.config","  \u003C","time-up","Time Up","http:\u002F\u002Flogging.apache.org\u002Flog4net\u002Frelease\u002Fmanual\u002Fconfiguration.html","nofollow","noopener","noreferrer","_blank"," 或者 "," + ","\"log4net.Appender.RollingFileAppender\"","file","\"..\u002F..\u002FLogs\u002F\"","appendToFile","\"true\"","maximumFileSize","\"100KB\"","maxSizeRollBackups","\"2\"","StaticLogFileName","\"false\"","DatePattern","\"yyyyMMdd_recor\\d.lo\\g\"","RollingStyle","\"Date\"","\"log4net.Layout.PatternLayout\"","        \u003C","conversionPattern","\"%date [%level] (%logger:%line) - %message%newline\"","      \u003C\u002F","level","\"DEBUG\"","appender-ref","ref","section","\"log4net\"","\"log4net.Config.Log4NetConfigurationSectionHandler\"","\u003Cconfiguration\u003E\u003C\u002Fconfiguration\u003E","configuration","  \u003C\u002F"," 加 ","2019","08","28","11","33","41",",","786"," [","DEBUG","] (ConsoleApplication1.Program:","23",") "," test","appSettings","static","2022-02-25T07:34:40.036Z")));