class CraftsController < ApplicationController
    
    def index
        @crafts = Craft.all 
        render json: @crafts
    end

    def create 
        # binding.pry
        @craft = Craft.new(craft_params)
        if @craft.save 
            render json: @craft
        else 
            render json: {error: 'error creating your craft :('}
        end
        
    end

    def show 
        @craft = Craft.find(params[:id])
        render json: @craft 
    end

    def update 
        @craft = Craft.find(params[:id])
        # binding.pry
        @craft.update(craft_params)
        @craft.save
        render json: @craft 
    end

    def destroy
        @craft = Craft.find(params[:id])
        @craft.destroy 
    end

    private 
    def craft_params
        params.require(:craft).permit(:name, :category, :notes, :id)
    end
end
