class DeleteName {
    constructor(name){
        this.name = name;
        this.setNull();
    }

    setNull(){
        this.id = setTimeout(() => {this.name = null}, 5000);
        console.log(this)
    }

    destroySetNull() {
        clearTimeout(this.id);
    }
}

let name = new DeleteName('Roma');
console.log(name);
name.destroySetNull();