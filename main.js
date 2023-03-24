var array=[5,3,6,7,8,1];
function desending(array)
	{
	for(i=0; i<array.length; i++)
		{
		for(j=i+1; j<array.length; j++)
			{
			if(array[i]<array[j])
				{
				c=array[i];
				array[i]=array[j];
				array[j]=c;
				}
			}
			console.log(array);
		}
		
	}
	desending(array);