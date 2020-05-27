class Craft < ApplicationRecord
    has_many :materials 
    validates :name, presence: true
    
end
 