Router.route('/', function () {
   // use the template named ApplicationLayout for our layout
  this.layout('blogTemplate');

  // render the Post template into the "main" region
  // {{> yield}}
  this.render('MainHeader', {to: 'header'});
    
  this.render('content', {to: 'main'});

  

  // render the PostFooter template into the yield region named "footer" 
  // {{> yield "footer"}}
  //this.render('PostFooter', {to: 'footer'});
});

Router.rout('/post', function(){
    this.render('post');
});