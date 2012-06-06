function OnTriggerEnter(other : Collider) {
	if (other.tag == "Player") {
		Application.LoadLevel(0);
		print("level loaded");
	}
}