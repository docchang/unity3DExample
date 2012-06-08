var forwardSpeed : float = 50;
var turnSpeed : float = 2;

function Update() {

	//this is the forward speed
	var forwardMoveAmount = Input.GetAxis("Vertical") * forwardSpeed;
	
	//turn amount
	var turnAmount = Input.GetAxis("Horizontal") * turnSpeed;
	
	
	transform.Rotate(0, turnAmount, 0);
	
	
	rigidbody.AddRelativeForce(0, 0, forwardMoveAmount);
	
	

 	if(Input.GetButtonUp("Jump")) {
		transform.Translate(Vector3.up * Time.deltaTime, Space.World);
	}
}
