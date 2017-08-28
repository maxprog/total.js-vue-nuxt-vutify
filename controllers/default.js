exports.install = function () {
 
 if(DEBUG==true)
  {
    const reg = /^(?!\/api)[/A-Za-z0-9_.]*$/;
    /*
    * Test url, if not start with '/api' then use nuxt middleware to handle the request
    * */
    console.log('start running dev');
    F.route((url)=>{  return reg.test(url)}, nuxt, ['#nuxt']);
    F.file((url)=>{ return reg.test(url.uri.path)}, nuxt, ['#nuxt']);
  
  }
  else
    {
      console.log('start running production');
      F.route('/*');
    }
}

function nuxt () {
  //this should not be execute
  throw new Error('nuxt middle ware not working')
}