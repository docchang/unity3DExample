var health = 10;
var TakeDamage : boolean;

function OnTriggerEnter(other : Collider) {

	if (other.tag == "Player") {
		TakeDamage = true;
	
	}

}

function OnTriggerExit(other : Collider) {

	if (other.tag == "Player") {
		TakeDamage = false;
	
	}

}


function Update() {
	if (TakeDamage) {
	
		if (Input.GetButtonDown("Fire1")) {
			health--;
		}
	}
	
	
	if (health <- 1) {

	print("Enemy Down");
	health = 0;
	Destroy (gameObject);

	}
}

