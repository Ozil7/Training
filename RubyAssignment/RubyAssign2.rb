class EmptyStringException < StandardError
   attr_reader :reason
   def initialize
      @reason = "EMPTY STRING!!! Please try again!"
   end
end


class NoNumberException < StandardError
   attr_reader :reason
   def initialize
      @reason = "No Numbers present!!! Please try again!"
   end
end



class NoPositiveNumberException < StandardError
   attr_reader :reason
   def initialize
      @reason = "No positive numbers present!!! Please try again!"
   end
end




def is_number? string
  true if Integer(string) rescue false
end







#Method to calculate the sum
def calculate_sum

	

	puts "\n"
	puts "Input a string. The string can be alphanumeric which includes characters, numbers, special character."
	@input_string = gets.chomp


	begin
		raise EmptyStringException if @input_string.strip == ""
	rescue EmptyStringException => e
		p "Error occured: #{e.reason}"
		return
	end

	#array_string = @input_string.scan /\w/
	array_string = @input_string.chars

	array_size = array_string.size
	counter = 0
	sum = 0
	negatives = 0
	positives = 0

	while counter < array_size do 
		character = array_string[counter].to_i
		if array_string[counter] == '-'
			while ( array_string[counter+1].to_i > 0 && array_string[counter+1].to_i <= 9 || array_string[counter+1] == '0' ) do 
         		counter = counter + 1
			end
			negatives = negatives + 1

		elsif (character > 0 && character <= 9)
			temp = ""
			while ( is_number?(array_string[counter]) && array_string[counter].to_i <=9) do 
				
				temp += array_string[counter]
				counter = counter + 1
			end
			counter = counter - 1
			positives = positives + 1
			# returned_number =  calc_sum(digit_array)
    		sum = sum + temp.to_i

		end
	
    	
		counter = counter + 1
	end





	
		begin
		raise NoPositiveNumberException if ( positives == 0 && negatives != 0)
		rescue NoPositiveNumberException => e
		p "Error occured: #{e.reason}"
		return
		end

		begin
		raise NoNumberException if ( positives == 0 && negatives == 0)
		rescue NoNumberException => e
		p "Error occured: #{e.reason}"
		return
		end

    average = sum/positives

	puts "\n"
	puts "Average of positive numbers: #{average}"

end


calculate_sum






=begin
while counter < array_size do
    	character = array_string[counter].to_i	
    	if (character > 0 && character <= 9)
    		if array_string[counter-1] == '-'
    			negatives = negatives + 1
    		else
    			positives = positives + 1
    	    	sum = sum + character
    		end
        end
        counter = counter + 1
    end
=end



