
const testPs1 = [
    [0.8178669684566557, -0.3013286176137626],
    [0.7704387372359633, -0.33558453619480133],
    [0.4326264448463917, -0.6205840180628002],
    [0.37818509666249156, -0.7034298735670745],
    [0.13367417454719543, -0.8455374459736049],
    [0.23197974357753992, -0.30809885542839766],
    [-0.4258583299815655, -0.5647901087068021],
    [-0.5535136978141963, -0.5738401464186609],
    [-0.6208025044761598, -0.6299151000566781],
    [-0.6721768821589649, -0.5459997057914734],
    [-0.23140945099294186, -0.197660097386688],
    [-0.8754620286636055, -0.06847131624817848],
    [-0.4593114028684795, 0.5708419205620885],
    [-0.3953952295705676, 0.28389686485752463],
    [-0.16200897004455328, 0.17201431235298514],
    [-0.23674252908676863, 0.34791229385882616],
    [-0.2745828051120043, 0.8530771611258388],
    [0.08210236765444279, 0.4348107138648629],
    [-0.18733928631991148, 0.9740244578570127],
    [0.6279922970570624, 0.5132483402267098],
    [0.5407732245512307, 0.5030116587877274],
    [0.0971160177141428, 0.39107990777119994],
    [0.11011534696444869, 0.31865859078243375],
    [0.24623666796833277, 0.10074033541604877],
    [0.492565949447453, 0.18212572112679482],
    [0.41429544938728213, 0.08625934552401304],
    [0.6292692087590694, 0.10670629935339093],
    [0.5929849203675985, 0.40448141656816006],
    [0.9519754159264266, -0.09100416209548712],
    [0.538055129814893, -0.7570054167881608]
];


const testPs2 = [
    [0.8178669684566557, -0.3013286176137626],
    [-0.3953952295705676, 0.28389686485752463],
    [0.538055129814893, -0.7570054167881608]
];


/** 250 random points */
const testPs3 = [[-0.06837261794134974,0.24669129960238934],[-0.23965075705200434,0.9619899620302022],[0.8579819118604064,0.5066547580063343],[0.7972523388452828,0.18249729834496975],[-0.24891769839450717,-0.8704820070415735],[-0.0715143783017993,0.7069823467172682],[0.8322081598453224,-0.07985538942739367],[0.7274482022039592,-0.5304619055241346],[0.05441009998321533,0.4650023174472153],[-0.10503366962075233,-0.29930173652246594],[0.24212879920378327,0.8350627012550831],[-0.7148707509040833,-0.30140245286747813],[0.24460717057809234,-0.034137274604290724],[0.1460842452943325,0.24297435441985726],[0.6546904034912586,-0.4723312701098621],[0.42428925866261125,0.38828774681314826],[-0.019135463051497936,0.6106131025590003],[-0.5527209658175707,-0.3221724391914904],[0.17637723125517368,-0.591952420771122],[0.23977513378486037,0.6562060392461717],[0.5934308324940503,-0.5059618796221912],[-0.6407186957076192,0.497973145917058],[-0.21866532694548368,0.26847764616832137],[-0.07545743696391582,0.4896427462808788],[0.48609504429623485,0.5786796356551349],[-0.15034591499716043,-0.5341939767822623],[0.9862002227455378,-0.018613074906170368],[-0.09486982552334666,-0.12605839082971215],[0.3939937213435769,-0.7496828343719244],[-0.2381257051602006,0.3717019921168685],[-0.2588696451857686,0.6251344275660813],[0.5817546141333878,-0.6674610204063356],[-0.6061424221843481,0.23848790768533945],[-0.029536429792642593,-0.15756334736943245],[-0.5907017267309129,0.7201354852877557],[-0.3943476593121886,-0.3791916980408132],[-0.3815639801323414,-0.7046512975357473],[0.8818139783106744,-0.2027746974490583],[0.4266889151185751,0.10642679128795862],[0.2532132104970515,-0.04283974599093199],[-0.2969377073459327,-0.3219797583296895],[-0.25553011475130916,0.5081506525166333],[0.3490630192682147,0.28530792286619544],[0.3106972328387201,-0.3443980091251433],[-0.6018532761372626,-0.03044283064082265],[0.36131041310727596,-0.058933361899107695],[0.2742706686258316,0.4981530108489096],[-0.7728181066922843,0.41286587808281183],[-0.32658978272229433,-0.42786582838743925],[-0.29851758060976863,-0.05401298822835088],[-0.2674774508923292,0.5627629831433296],[0.19938982091844082,-0.7425182755105197],[0.5693084443919361,-0.04292016848921776],[-0.4139241683296859,0.83332832576707],[0.8031321703456342,0.5350788300856948],[0.34549556439742446,0.20973847899585962],[-0.4275445765815675,0.21668926533311605],[-0.19842456001788378,-0.8390833069570363],[0.6235542730428278,-0.2498430861160159],[-0.9794690483249724,0.19745925394818187],[-0.02888870844617486,0.30762880854308605],[-0.34724259935319424,-0.04592140996828675],[0.45441607339307666,-0.7082322766073048],[0.18955081328749657,-0.3040677676908672],[0.33993608271703124,0.7913536382839084],[0.7350153704173863,-0.6296815918758512],[0.46235682163387537,0.5270141684450209],[0.30377518152818084,0.42011723341420293],[-0.39963784208521247,0.595478693023324],[-0.29603304667398334,-0.3742026719264686],[0.039947984740138054,-0.8386571905575693],[0.4273667009547353,-0.5617964323610067],[-0.2916371221654117,0.7445558062754571],[-0.13323221215978265,0.5390493725426495],[-0.7575747263617814,0.19945869548246264],[0.2038222597911954,0.6385732218623161],[0.5344263627193868,-0.5794642851687968],[-0.2999378456734121,-0.0325522692874074],[0.797105647623539,-0.5634452989324927],[0.5251272618770599,0.35715835355222225],[0.05625755852088332,-0.41203029826283455],[0.20769701106473804,-0.22114731697365642],[-0.9562497269362211,0.07472064904868603],[0.08410318614915013,0.02066147467121482],[0.8878654525615275,-0.41653784923255444],[0.29937942046672106,-0.9308756464160979],[-0.2806639513000846,-0.663544699549675],[-0.5425717020407319,0.7665202603675425],[-0.6571713220328093,0.7113785617984831],[0.7937280423939228,-0.21018816251307726],[-0.10467677609995008,-0.2539759324863553],[0.30367896100506186,-0.8959427527152002],[0.13684159563854337,0.38931655744090676],[-0.009032274596393108,-0.1529961503110826],[-0.7603017413057387,-0.22381313052028418],[0.20905048167333007,0.619204486720264],[-0.22843948379158974,0.3723412062972784],[0.035222073551267385,-0.21375593822449446],[-0.6318801045417786,-0.3195871841162443],[-0.13900022860616446,0.5511894612573087],[0.7165546165779233,0.4035375309176743],[0.2414379846304655,-0.4952407330274582],[0.09656103374436498,-0.8995019467547536],[0.610790737438947,-0.6496799192391336],[0.04292426398023963,0.569818755146116],[0.3455573176033795,0.7872743485495448],[0.8062709672376513,0.47972053475677967],[-0.4567060125991702,0.5699014100246131],[0.5342044713906944,-0.34586931811645627],[0.12316847639158368,-0.9442790937609971],[-0.030828483402729034,0.8420282332226634],[0.15550399385392666,0.9584001116454601],[0.22141932789236307,-0.12519535701721907],[-0.671185128390789,0.19670378183946013],[0.13033813098445535,0.07167760003358126],[0.27753548603504896,0.8015262023545802],[-0.4065674669109285,0.34378138557076454],[0.2620616825297475,0.3440372357144952],[-0.5648046904243529,0.2735417257063091],[0.3350412091240287,-0.38169764587655663],[-0.08224935410544276,0.7671010158956051],[0.4873053668998182,-0.0789572517387569],[-0.09660534840077162,0.7726025627925992],[0.9368096073158085,0.3239012793637812],[-0.4682811554521322,0.8083247500471771],[-0.18988503888249397,0.9000944481231272],[-0.31689070258289576,-0.6016660248860717],[-0.9178902111016214,0.18319126777350903],[0.6577355931513011,0.48688106518238783],[-0.6849454939365387,-0.3975161607377231],[0.6963082393631339,-0.11501343920826912],[0.35645988676697016,0.757973674684763],[-0.29613137198612094,0.602959344163537],[0.3689976525492966,0.6227736473083496],[0.35187239991500974,-0.5063734059222043],[0.14326819078996778,-0.683208123780787],[-0.08850922388955951,0.1527080019004643],[0.034518550615757704,-0.7287791091948748],[-0.3869464681483805,0.7357028843834996],[-0.19643321400508285,0.7994224233552814],[-0.340626765973866,-0.17106481408700347],[-0.23218560172244906,0.5586602059192955],[0.28879693150520325,-0.8552847639657557],[-0.5334091074764729,-0.0390535406768322],[0.29466191167011857,-0.8362934859469533],[-0.25966818537563086,-0.2830553357489407],[0.4787793750874698,-0.284039908554405],[-0.4772487124428153,-0.3053503525443375],[-0.396891035605222,0.25960686011239886],[0.2906640418805182,0.032017309218645096],[0.14716611057519913,-0.9559663971886039],[0.38497952790930867,0.9072027783840895],[-0.3088433244265616,-0.8503878060728312],[0.3926551495678723,0.3961834120564163],[0.3046863926574588,-0.6376023897901177],[-0.015488856937736273,-0.0019016722217202187],[-0.26515525626018643,-0.5570995728485286],[-0.5585683002136648,0.24329712288454175],[0.3794595133513212,0.3319527190178633],[0.16101485397666693,0.023557916283607483],[-0.6132051912136376,-0.5583792505785823],[0.3366930829361081,0.5573433302342892],[0.38936497969552875,0.10162505647167563],[-0.33140015974640846,0.13617914216592908],[-0.8438251973129809,-0.19357150793075562],[0.1219678777270019,0.4226807034574449],[-0.3629610794596374,0.1892701694741845],[-0.8003120450302958,0.5496844691224396],[0.3556104260496795,0.33346679341048],[0.46492555271834135,0.5508654527366161],[0.7276619640178978,-0.06765367183834314],[0.4013334261253476,0.37082564644515514],[-0.030392763670533895,0.2051548445597291],[0.17885201564058661,0.15162832150235772],[0.7425673715770245,0.40072733582928777],[0.15108641516417265,-0.10707409447059035],[-0.5751125132665038,-0.5877979318611324],[0.8980852589011192,0.18853476317599416],[0.5078238053247333,0.1107821948826313],[-0.03557094978168607,0.1027750950306654],[0.5568638294935226,-0.36112398840487003],[0.928287417627871,-0.20794413518160582],[-0.04029218526557088,-0.08316461881622672],[0.6049029105342925,-0.10365726333111525],[0.24445362575352192,0.5197026389651],[0.6747571900486946,0.5004885699599981],[0.24509373866021633,-0.9643082451075315],[0.43912886548787355,-0.574876403901726],[0.615042535122484,-0.7198152872733772],[0.7086386294104159,0.40832309098914266],[0.08380067348480225,0.25480827083811164],[-0.19965303409844637,0.7908159201033413],[0.891830806620419,-0.21082316618412733],[0.07066276064142585,-0.9847313724458218],[-0.1948034530505538,-0.7507966300472617],[0.714179907925427,0.4411814184859395],[-0.04913096874952316,0.9388933214358985],[0.36944786738604307,0.40591908199712634],[-0.05756968352943659,0.709699816070497],[0.2940573953092098,-0.5652500637806952],[-0.255593603476882,-0.8833065815269947],[0.9576620301231742,0.1612621475942433],[-0.20660614548251033,0.7827863115817308],[-0.5312729738652706,-0.5273682260885835],[0.5659427735954523,-0.680856048129499],[-0.13798616966232657,0.33125747041776776],[-0.25994580797851086,-0.7888690154068172],[-0.28793885512277484,-0.8143174313008785],[0.47820395324379206,0.2764046872034669],[0.3523452249355614,-0.8984757694415748],[-0.1291321930475533,0.7663498478941619],[0.5002665580250323,0.3011456122621894],[-0.8626784114167094,0.22067836252972484],[0.4430229365825653,-0.7248681732453406],[0.16535856435075402,-0.483610809314996],[-0.5347383497282863,0.5708429743535817],[0.15431070420891047,-0.39113035472109914],[0.21612598141655326,0.03509194077923894],[-0.5119179547764361,-0.399412305559963],[-0.05216383654624224,-0.1028859419748187],[-0.6766679552383721,-0.6671315655112267],[0.9340106234885752,-0.163212267216295],[0.6692212331108749,0.13017004961147904],[-0.5994388735853136,-0.08319103345274925],[-0.29115321952849627,-0.19229238666594028],[-0.18918490502983332,-0.7520059524103999],[-0.17424757918342948,-0.9708741512149572],[-0.3267750018276274,0.5634740833193064],[-0.8061242531985044,0.4586904044263065],[-0.17925393907353282,0.04325407883152366],[0.4799038711935282,-0.6825113026425242],[0.19416889501735568,0.7231255453079939],[0.0364054343663156,0.2699950388632715],[-0.40239307191222906,-0.25158509658649564],[-0.007043752353638411,-0.6395097812637687],[-0.9197405795566738,-0.14871320175006986],[0.5986990607343614,0.4656394310295582],[0.38942713337019086,-0.3336562141776085],[0.6650222782045603,0.7392000975087285],[-0.8045754530467093,0.27961471304297447],[-0.5416276920586824,-0.16104972688481212],[-0.04674221156165004,-0.7596850655972958],[-0.13225966226309538,0.640809808857739],[0.4664391065016389,0.3641343219205737],[-0.6282230382785201,-0.20565012702718377],[-0.010442608501762152,0.38119500782340765],[0.32265523821115494,-0.25384897366166115],[0.3949418682605028,0.5457632620818913],[-0.4735838104970753,-0.5202990802936256],[-0.2610064917244017,0.4391350927762687]];


const testPs4 = [
    [-0.4138006651774049, -0.42990321898832917],
    [-0.8917216039262712, -0.3225807063281536],
    [-0.38367262436077, 0.1443509515374899],
    [-0.9752032961696386, -0.13339586416259408],
    [-0.542937807738781, 0.7628170913085341],
    [-0.45463427482172847, 0.4007003577426076],
    [-0.0872559454292059, 0.7259468180127442],
    [-0.1378043475560844, 0.7755840974859893],
    [0.19141757860779762, 0.7076798905618489],
    [0.08382904063910246, 0.5550109813921154],
    [-0.32386869192123413, 0.2648883746005595],
    [0.03755864500999451, 0.27409769129008055],
    [0.43148872070014477, 0.43476812774315476],
    [0.4085215041413903, 0.2049797703512013],
    [0.4983817241154611, 0.1429550009779632],
    [0.699087331071496, -0.18710933858528733],
    [0.3830820135772228, -0.10252361139282584],
    [0.6702407570555806, -0.3911983943544328],
    [0.23736666282638907, -0.46374366199597716],
    [0.5029562865383923, -0.5718204071745276],
    [0.263412949629128, -0.8509359327144921],
    [-0.04231513012200594, -0.7259839461185038],
    [0.019594828598201275, -0.9740724577568471]
];


export { testPs1, testPs2, testPs3, testPs4 }
