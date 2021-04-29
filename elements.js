class elements
{
    constructor()
    {
        this.add = createButton("add food");
        this.feed = createButton("Feed the dog");
        this.name = createInput("name");
        this.scene = createButton("Change scene");
    }
    hide()
    {
        this.add.hide();
        this.feed.hide();
        this.name.hide();
        this.scene.hide();
    }
    show()
    {
        this.add.show();
        this.feed.show();
        this.name.show();
        this.scene.show();
    }
    pos()
    {
        this.add.position( 750 , 70 );
        this.feed.position( 380 , 70 );
        this.name.position( 525 , 70 );
        this.scene.position( 550 , 520 );
    }
    press()
    {
        this.add.mousePressed( ()=>{
                                    setfood(val+1);    
                                    } );
        this.feed.mousePressed( ()=>{
                                    writeStock( val );
                                    dog = null; 
                                    happyTIME=0;
                                    this.feed.hide();
                                    } );
        this.scene.mousePressed( ()=>{
                                    sene++;
                                    scene( sene );
                                    } );
    }
    display()
    {
        this.show();
        this.add.hide();
        this.feed.hide();
        this.pos();
        this.press();
    }
}