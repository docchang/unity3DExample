function OnTriggerEnter(other : Collider) {
	if (other.tag == "Player") {
		
		print("Sphere hit");
	}
}