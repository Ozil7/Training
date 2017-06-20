array =  Array.new(10){Array.new(10,0)}
#puts array.length


expressions = Array[] #array to store all expressions

grid_location = Array[]   #array to store all grid locations 



#Creating a hash for alphabets..................
@my_hash = {
	A: 0,
	B: 1,
	C: 2,
	D: 3,
	E: 4,
	F: 5,
	G: 6,
	H: 7,
	I: 8,
	J: 9
}






#Method to display the grid.....................	
def display_grid(array)
	for i in 0...10
		for j in 0...10
			print "| #{array[i][j]} |    "
	 
        end
    	puts "\n"
    end
end






#Setting the value of grid location for set value choice......................................................................

def setVal(words, array)
	
	#Creating a hash for alphabets


   

    r = (@my_hash[(words.at(0))[0].upcase.to_sym]).to_i 
    c = (words.at(0))[1].to_i

    array[r][c] = (words.at(1)).to_i

end






#Setting the value for set expression choice...........................................................................
def setExp(words1, words2, array)


   #Calculating index of row 1 and column 1
   r1 = (@my_hash[words1[0][0].upcase.to_sym]).to_i
   c1 = words1[0][1].to_i
   
   #Calculating index of row 2 and column 2
   r2 = (@my_hash[words2[0][0].upcase.to_sym]).to_i
   c2 = words2[0][1].to_i
   
   #Calculating index of row 2 and column 3
   r3 = (@my_hash[words2[2][0].upcase.to_sym]).to_i
   c3 = words2[2][1].to_i


   #checikng for operator...........................
   case words2[1]

   	when '+'
   		array[r1][c1] = array[r2][c2] + array[r3][c3]

   	when '-'
   		array[r1][c1] = array[r2][c2] - array[r3][c3]

   	when '*'
   		array[r1][c1] = array[r2][c2] * array[r3][c3]

   	when '/'
   		if 	array[r3][c3] == 0
   			puts "\n"
   			puts " Sorry! Divisor cannot be '0'. Please enter again. "
   			return
   		else
   			array[r1][c1] = array[r2][c2] / array[r3][c3]
   		end

   	when '**'
   		array[r1][c1] = array[r2][c2] ** array[r3][c3]


    end
   #................................................
end


#...........................................................................



#Checking for any alterations to existing array.............................
def alter_array(expressions, array)

	expressions.each do |exp|
		command = exp.to_s
		words1 = command.split(" = ")
	    words2 = words1[1].split(" ")
	    setExp(words1, words2, array)

	end

end
#...........................................................................






#............................................................................

display_grid(array)

begin
	puts "\n"
	puts "Action List:"
	puts "1) Set Value"
	puts "2) Set Expression"
	puts "3) Exit"
	puts "Enter your choice: "
   
    #check if choice entered is not valid
	begin
		num = gets.chomp.to_i
		unless num >= 1 && num <= 3
			puts "\n"
			puts "Please enter a valid choice: "
		end
	end while !(num >= 1 && num <= 3)  #ilidf choice is not valid


	#Checking for command..........................................
	case num

		when 1
			flag = 0
			begin
				puts "\n"
				puts "Grid locations are as: [A-J] [0-9]"
				puts "Enter set value command as: A1 = 3"
				command = gets.chomp.to_s 
				words = command.split(" = ")
	
				if words[0][1..-1].to_i > 9
					flag = 1
					puts "\n"
					puts "PLEASE ENTER VALID COMMAND!!!"
				else
					flag = 0
				end

   			end while flag != 0 #End of begin and while block

			setVal(words, array)
 	  
 			if grid_location.include?(words[0])  
    			alter_array(expressions, array)   #check for any alterations in array
    		end


		when 2
			flag = 0
			begin
				puts "\n"
				puts "Grid locations are as: [A-J] [0-9]"
				puts "Enter set expression command as: A2 = B2 + C2"
				command = gets.chomp.to_s
	   
				words1 = command.split(" = ")
				words2 = words1[1].split(" ")

				if (words1[0][1..-1].to_i > 9 || words2[0][1..-1].to_i > 9 || words2[2][1..-1].to_i > 9)
					flag = 1
					puts "\n"
					puts "PLEASE ENTER VALID COMMAND!!!"
				else
					flag = 0
				end

   			end while flag != 0 #End of begin and while block

           
    			expressions.push(command)         #pushing all expressions into array 
    		 	grid_location.insert(0, words1[0], words2[0], words2[2])
    		

    		#puts grid_location

			setExp(words1, words2, array)
	
	end
	#...........................................

	puts "\n"
	puts "Your new grid"
	display_grid(array)


	if num == 3
		puts "\n"
		puts "Are you sure you want to exit[Y/N]"
		option = gets.chomp.to_s.upcase
		if option == 'N'
			num = 0
		else
			puts "\n"
			puts "Thank you!!!"
			puts "\n"
		end
	end


end while num != 3  #exit when choice entered is 3, exit
#.............................................................................