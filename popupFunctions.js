const btn = document.getElementById('opbtn');
var pwrap = document.querySelector('.popup-wrapper');
var pclos = document.querySelector('.popup-close');
var popup = document.querySelector('.popup');
var ppa = document.querySelector('.a1');
var amz = document.querySelector('.amz');


btn.addEventListener('click' , () => {
    console.log('button is working now....');
    const list = popup.classList;
    list.add("transitionpp");
    const vsible = pwrap.classList;
    vsible.add('visibility');
    const vsiblehdd = pwrap.classList;
    vsiblehdd.remove('visibilityhd');
    const back2 = popup.classList;
    back2.remove("transitionppbk");
});

ppa.addEventListener('click' , () => {
    const blk = amz.classList;
    let open = blk.contains('disblk');
    blk.toggle("disblk");
    // console.log(blk);
    
    if(open){
        const pprmv = popup.classList;
        pprmv.remove("transitionpp");
        const back = popup.classList;
        back.add("transitionppbk");
        const vsiblehd = pwrap.classList;
        vsiblehd.add('visibilityhd');
        const vsbl = pwrap.classList;
        vsbl.remove('visibility');
        const blk = amz.classList;
        blk.remove("disblk");
    }
});

 pclos.addEventListener('click', () =>{
    const pprmv = popup.classList;
    pprmv.remove("transitionpp");
    const back = popup.classList;
    back.add("transitionppbk");
    const vsiblehd = pwrap.classList;
    vsiblehd.add('visibilityhd');
    const vsbl = pwrap.classList;
    vsbl.remove('visibility');
    const blk = amz.classList;
    blk.remove("disblk");
 });

 pwrap.addEventListener('click', () =>  {
    const pprmv = popup.classList;
    pprmv.remove("transitionpp");
    const back = popup.classList;
    back.add("transitionppbk");
    const vsbl2 = pwrap.classList;
    vsbl2.remove('visibility');
    const vsiblehd2 = pwrap.classList;
    vsiblehd2.add('visibilityhd');
    const blk = amz.classList;
    blk.remove("disblk");
 });

