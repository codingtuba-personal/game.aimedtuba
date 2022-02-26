const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
let offical_maps=["1î2ū5í7ū9ū@ūćū$ūźū^ūżū*ū(ū)ū-ū_ū+ū{ū\\ū;ūčūçū.ū>ū,ū<ūmžnūcūgūfįaūsūpūoūiūuūyūtūrūwūQūTūUūOūAūSūDíGūJìLūXūNūèïêūëūēūęūÿūûūüū","ćž=î+ū|ì]ì}ì[ì{í:žçìmįvžxìzìkìjìhìfūdžaūpìoìiìrūeøwūEïUìIžOūJūKžLūèžéūêž","1í2ú3ì4ž6ž8ï9ū!ū$ìźū^ūżœ*ž-ø+œ|ū]ū}ū[ū%27í\\ū;į:îčøçūnìvœxìzúlžkœjūhžgūdúaúsúoūtūrìeìWūRíTìYūUìIíOžPžAūSūDžFūHūJžXìMūèžéžêūëūēìėìęūÿūûūüū","1į2î3ú4ú5ú6ú7ú8ú9ú!íćí)ú_í=ú+ú|ú]ú}ú[ú{ú%27ú\\í:úmíbívúcúxúzúlúkújúhúgídíyúríeúwúqúQúWúEúRúTúYíIúGíJíKúLúZúXúCúVúBøNúMúéíüï","1î2ž3í4į5ž6œ7ø8ì9ū!ū@ūćū$ūźū^ūżø*ū(ū)ū-ū_ž=ž+ì|ì]ø}œ[í{ž%27œ\\ì;į:ìčìçì.ì>œ,ø<ømønøbìvìcìxìzìlïkøjì","1î2į3ø4ū5ū7ú8ū!í@ìćí$ūźū^ūżø*ž(ì)ø-ū_ì+ì]ū}ū[ì{ū%27ø\\ž;øčū,íbœcūxūzūløkūjūhøgžfūaūsìpūoøiúuūyœtžržwíqìQūWœEūRžTœYžUìIūOìPíJíKūLœZøXūCžVūBíNìMïéūêūëūēœėíęūÿūûøüø","1î2œ3ø4œ5ø6ø7œ8ø9œ!ø@øćœ$œźø^œżø*ø(œ)ø-œ_ø=ø+œ|œ]œ}ø[ø{ø%27œ\\ø;œ:øčøçø.œ>œ,ø<œmœnøbøvœcœxœzœløkøjøhœgøfœdøaøsøpøoøiœuøyœtœrœeøwœqøQœWøEœRøTœYøUœIœOœPœAøSøDœFøGøHœJøKøLœZøXœCøVøBøNœMøèøéœêøëœēøėøęœÿøûøüï","1ū2ū3ū4ū5ū6ū7ū8ï!î@ū-ū_ū=ø+ì|ū}í[œ{ì%27ū\\ž;ūçūnūbūvœcìxžzįlíkœjìhūgūfūsūtūrūeøwìqūWíEøRìTūYū","1î2ū3í5ž8ž!ž@ū$ìźū^øżū*ø(œ)ì-œ_œ+ì[ø{ø%27œ\\ø;žčį.ž>œ,ø<œmœnœbūvøzžløkœjœhøgøfœdœaìsžožiøuøyìtœrūeíwūqūEœRœTœYøUìIìOžPœAìSìDìFœGøHøJžKìZíVøBìNœMìèœéìêìëïęïÿøûøüœ","1ø2ø3ø4ø5ø6ø7ø8ø9ì!ì@žćž$žźž^žżž*ž(ž)ž-ž_î=ì+ì|ì]ì}ì[ì{ì%27ì\\ì:ūčūçū.ū>ū,ū<ūmūnūbūvūcūxūzūfūdūaūsūpūoíiįuìyútúTúYúDūFūGūZūXūCūVūèïéìêžëū","1ï2ì3ì7ú8ú9œ!ž@ìćį$ìźœ^ø*œ(ú)ø-œ_ú=ì+í|ì]œ[œ{ū;účìçø.ú>œ,ø<úmønœbœvœcœxúzîlújúsœpøoūiúuúqúQúWūEūRúIūOúSœDūFúGūJœKøLúZúCúVúBúNœMøèžéœêūëúēúėúęúÿìûœüž","1ï2œ3ø4œ5ø6ø7œ8œ9œ!ø@øćø$øźø^œżø*œ(ø)œ-œ_ø=œ+œ|œ]ø}œ[ø{ø%27œ\\ø;ø:œčœçœ.œ>ø,œ<ømœnœbøvœcøxœzœlœkøjœhøgœfødøaœsøpœoøiœuøyœtœrœeœwøqœQœWœEøRœTøYœUœIøOøPøAœSœDœFœGœHøJœKœLœZœXøCœVøBœNøMœèîéøêøëøēœėøęøÿøûœüø","1î2ž3ž4ž5ž6ū7ū8ū9œ!ø@ūćū$ūźí^įżū*œ(œ)ø-ì_ì=ì+ū|ū]ū}ū[ū{œ%27ì\\œ;į:ìčøçø.œ>œ,œ<œmønøbøvøcøxøzœlœkœjìhìgìuìyìtïRìTìYì","1î2ú3ú@íćœ$úźì^ï_į=ū+í;ø:œčžbūvífœdï","1į2î3ú4ú5ú6ú7ú8ú9ú!íćí)ú_í=ú+ú|ú]ú}ú[ú{ú%27ú\\í:úmíbívúcúxúzúlúkújúhúgídíyúríeúwúqúQúWúEúRúTúYíIúGíJíKúLúZúXúCúVúBœNúMúéíüï","1î3ú4ú5ú6ú7ú8ú9ú!ú@ú$ú-ú_ú+ú]ú}ú[ú{ú\\ú;účú.ï<únúbúcúzœjúgúfúaúsøpúuútúrúeįwíQúRúYúUúAúSúDúFúHúJúMúèúéúêúëúēúėúęúÿúûúüú ","fírūeūwíUîIìOøPïJūKūLœèíéžêį","1ú2ú3ú4ú5ú6ú8ï9œ!î@úżú-ú_ú+í}ú[ú{ú\\ú;účį<únúbúcújúgúfúaúuútúrúwúRúYúUúOúPúAúSúDúFúHúJúMúèúéúêúëúēúėúęúÿúûúüú","3ž5ž7ž@îćú$úźú^ūżú*ú(ú)ú-ú_ū\\ū;ūčœçø.ì%3Eœ,ø%3CœnūbūxïkįgūfūaøsœpøoìiøuœtūrūYūUúIúOúPúAìSúDúFúGúHúZìCìëūē%C3%ADėū","1į2ø3ž7ū8ž9ì!î@%C3%AD$ì*ū)ï-%C3%AD+ū[ūčū,ū%3Cūmūcūhūaūsøpœoži%C3%ADuìyūwūTūOūPœAœSžDœFìGūLūNūêūëœēøėžęøÿìûūū","1ï3ï5ï7ï9ï@ū$%C3%AD^ø*ø)œ_œ+ø]ū[į%27%C3%AD;ìčì.ì,ìmìbūcœzūkøhøfœaūpøiœyūržwžQžEžTžUøOœAøDœGøJœLœXœVøNœèūéūêūëūēūėūęūÿūûūüî","1î2ø3ž4ø5œ6ø7œ8ū9ø!%C3%AD@ìć%C3%AD$ūźœ^ūżœ*ø(ø)ø-ž_ū=į+ì]ì[œ{ū%27œčì.ø%3Eœbžvūcœzølūkœjøhūgžfždøaøpœoœiūuœyžtūeøwœq%C3%ADTžY%C3%ADIœOøAøSœDøFøJžKūLœZøXūCœVìBìNìMūéžêžē%C3%ADęìÿìûìüï","2ž@øćœ$ūźž_œ=ø+œ|ø}%C3%AD:œčø%3EįcœxøzîlūdìaøpœeøQïUøIœOøJœKœLøèøéūêøëìē%C3%AD","1ø2œ3œ4œ5ø6œ7ø8ū9ø!î@œćœ$œźø^ø(œ)ø-ū_œ=ø+ø|œ]ø[%C3%AD{ž\\ì;ø:œčøçø.ø,į%3CūnïbœvøcøxœzøfødœaøsøpøoœiøuøyœtørøeœwøqœQøWøEøRœTøYœUœIøOøPøAøSœDøFœGøHøJœKœLøZœXøCœVøB%C3%ADNøMœèøéœêøëøēœėœęøÿœûøüø","1ø2œ3œ4ø5ø6œ7ø8œ9ø!î@øćœ$øźœ^œżœ*œ(œ)œ-ø_œ=œ+ø|œ]ø}œ[ø{ø%27øœ;œ:øčœçø.ø%3Eø,ø%3CœmønøbøvøcøxœzølœkøjøhœgœfœdøaœsøpøožiœuøyœtøržeœwœqœQøWøEœRœTøYœUœIœOøPœAœSøDœFøGœHøZœXøCœVøBœNøMœèïéìêìëøēøėøęœÿœûøüœ","1į2î3œ4ø5œ6ø7ø8œ9ž!ìćøżì(ø)ū-ì_ì=œ+œ|ì]œ}ø[ū{ì'œø;ì:ūčžçž>ūmœnœbøvœcízìløkžhígøfídøaœpœiìyøtœeíwūQøWūEœTžYíUūIūOœAøSœDøGøHœJžKœLøXūVøBžMūèíéíêžēíėūęžÿžüï"]
let offical_times=['60','60','240','30','35','240','75','45','240','30','60','45','40','35','30','40','25','50','55','25','45','180','75','75','105','250']
let game_list=[]

app.listen(9999)

app.use(express.json())

app.get('/',function(req, res){res.sendFile(path.join(__dirname,'game/index.html'))})
app.get('/p',function(req, res){res.sendFile(path.join(__dirname,'game/e/play.html'))})
app.get('/l',function(req, res){res.sendFile(path.join(__dirname,'game/loose.html'))})
app.get('/w',function(req, res){res.sendFile(path.join(__dirname,'game/win.html'))})
app.get('/c',function(req, res){res.sendFile(path.join(__dirname,'game/p/choice.html'))})
app.get('/r',function(req, res){res.sendFile(path.join(__dirname,'game/p/random.html'))})
app.get('/see',function(req, res){res.sendFile(path.join(__dirname,'game/p/core.html'))})
app.get('/select',function(req, res){res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>game.aimedtuba.com</title>
    <link href="https://aimedtubaimages.cadd27.repl.co/logo.png" rel="icon" type="image/png">
    <style>
        .table{
            width: 100%;
            height: 90vh;
            overflow-x: auto;
            overflow-y: none;
        }
        .td{
            text-align: center;
            width:200px;
            height:95vh;
        }
        .iframe{
            width:190px;
            height:225px;
        }
        .button{
            margin-top:5px;
            width:190px;
            height:20px;
            border: 1px solid black;
            background-color: transparent;
        }
    </style>
</head>
<body>
    <table class='table'>
        <tr class='tr'>

        </tr>
    </table>
    <script>
        let array=${JSON.stringify(offical_maps)};
        let times=${JSON.stringify(offical_times)};

        array.forEach(function(item, index) {
            document.getElementsByClassName('tr')[0].innerHTML+=${"`<td class='td'><iframe src=\"/see?c=${item}\" class='iframe'></iframe><br><br><button class='button' onclick=\"location.replace('/c?c=${item.replaceAll('\\\\','\\\\\\\\')}&t=${parseInt(times[index])*3}&p=0')\">Easy</button><br><button class='button' onclick=\"location.replace('/c?c=${item.replaceAll('\\\\','\\\\\\\\')}&t=${parseInt(times[index])*.90}&p=1')\">Normal</button><br><button class='button' onclick=\"location.replace('/c?c=${item.replaceAll('\\\\','\\\\\\\\')}&t=${parseInt(times[index])*.33}&p=3')\">Hard</button></td>`"}
        })
    </script>
</body>
</html>
`)})
app.get('/s',function(req, res){res.sendFile(path.join(__dirname,"game/p/single.html"))})
app.get('/s/s',function(req, res){res.sendFile(path.join(__dirname,"game/shop.html"))})
app.get('/s/json',function(req, res){res.sendFile(path.join(__dirname,"game/shop.json"))})
app.get('/edit',function(req, res){res.sendFile(path.join(__dirname,"game/e/edit.html"))})
app.get('/e',function(req, res){res.sendFile(path.join(__dirname,"game/e/hub.html"))})
app.get('/t/1',function(req, res){res.sendFile(path.join(__dirname,"game/t/1.html"))})
app.get('/t/2',function(req, res){res.sendFile(path.join(__dirname,"game/t/2.html"))})
app.get('/t/3',function(req, res){res.sendFile(path.join(__dirname,"game/t/3.html"))})
app.get('/t/4',function(req, res){res.sendFile(path.join(__dirname,"game/t/4.html"))})
app.get('/t/5',function(req, res){res.sendFile(path.join(__dirname,"game/t/5.html"))})
app.get('/g/c',function(req, res){res.sendFile(path.join(__dirname,"game/setup.html"))})
app.get('/g/p',function(req, res){res.sendFile(path.join(__dirname,"game/p/mulit.html"))})
app.get('/g/l',function(req, res){res.send(JSON.stringify(game_list))})
app.get('/g/w',function(req, res){
    if(req.query.id){
        let found=-1;
        game_list.forEach((i,d)=>{if(i.id==req.query.id){found=d}})
        if(game_list[found]){
            if(game_list[req.query.id].playing==true){
                res.redirect('/g/p?id='+req.query.id+"&m="+game_list[req.query.id].map+"&t="+game_list[req.query.id].time)
            }else{res.sendFile(path.join(__dirname,"game/wait.html"))}
        }else{res.sendStatus(404)}
    }else{res.sendStatus(406)}
})
app.post('/g/j',function(req, res){
    if(req.query.id){
        let found=-1;
        game_list.forEach((i,d)=>{if(i.id==req.query.id){found=d}})
        if(game_list[found]){
            game_list[req.query.id].playing=true
            res.send('/g/p?id='+req.query.id+"&m="+game_list[req.query.id].map+"&t="+game_list[req.query.id].time)
        }else{res.sendStatus(404)}
    }
})
app.post('/g/w',function(req, res){
    if(req.query.id){
        let found=-1;
        game_list.forEach((i,d)=>{if(i.id==req.query.id){found=d}})
        if(game_list[found]){
            game_list.splice(found, 1)
        }else{res.sendStatus(404)}
    }
})
app.post('/g/m',function(req, res){
    let random_number=Math.floor(Math.random()*offical_maps.length)
    let name=game_list.length+"-"+Math.floor(Math.random()*999999)
    game_list.push({
        name:name,
        id:game_list.length,
        playing:false,
        map:offical_maps[random_number],
        time:offical_times[random_number]*3
    })
    res.send(`/g/w?id=`+(game_list.length-1).toString()+"&n="+name)
})
app.post('/s',function(req, res){
    let random_course=Math.floor(Math.random() * offical_times.length);
    res.send(JSON.stringify(
        {
            time:offical_times[random_course],
            course:offical_maps[random_course]
        }
    ))
})
app.post('/e',function(req, res){
    fs.appendFile('/users/27cadem/desktop/game/game/suggestions.txt',`\n${req.body.code}`,err=>{
        if(err){res.send(err)}
        if(!err){res.send('Your level is under review.')}
    })
})