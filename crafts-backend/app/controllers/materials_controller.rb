class MaterialsController < ApplicationController

    before_action :set_craft

    def index
       @materials = @craft.materials 
       render json: @materials
    end

    def create 
        @material = @craft.material.new(material_params)
        if @material.save 
            render json: @material
        else
            render json: {error: 'error creating your material :('}
        end
    end

    def show 
        @material = @craft.find_by(id: params[:id])
        render json: @material
    end

    def destroy
        @material.destroy
    end

    private 

    def set_craft 
        @craft = Craft.find(params[:craft_id])
    end

    def material_params
        params.require(:material).permit(:name, :craft_id, :description)
    end
end
