const itemcontain=document.querySelectorAll('.itemcontain');

itemcontain.forEach(myfunction=>{
    const poadd=myfunction.querySelector('.poadd');
    const naadd=myfunction.querySelector('.naadd');

    myfunction.addEventListener('click',()=>{
        poadd.classList.toggle('postactive');
        naadd.classList.toggle('name');
        naadd.classList.toggle('naadd');
    })
})