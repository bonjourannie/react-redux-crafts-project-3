class MaterialsController < ApplicationController

    before_action :set_craft

    def index
        @materials = Material.all   
        render json: @materials
    end

    def create 
        @material = @craft.materials.new(material_params)
        if @material.save 
            render json: @craft
        else
            render json: {error: 'error creating your material :('}
        end
    end

    def show 
        @material = Material.find(params[:id])
        render json: @material
    end

    def destroy
        @material = Material.find(params["id"])
        @craft = Craft.find(@material.craft_id)
        @material.destroy
        render json: @craft
    end

    private  

    def set_craft 
        @craft = Craft.find(params[:craft_id])
    end

    def material_params
        params.require(:material).permit(:name, :craft_id, :description)
    end
end
