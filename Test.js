require('./UPPERSITE/BOOT.js');

//설정 정보를 넣을 때 쓴다 {a : b, c : d}
//문자를 표시할 때 " ", ' ' 둘다 써도 된다. 더블 안쓰고 싱글 쓸 경우에는 shift 안 써도 되서.
BOOT({
	CONFIG : {
		defaultBoxName : 'Test',
		inDevMode : true 

	},
	SERVER_CONFIG : {
		isNotUsingDB : true

	}
});
