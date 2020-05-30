class CommentsController < ApplicationController
    before_action :set_craft

    def index
        @comments = Comment.all   
        render json: @comments
    end

    def create 
        @comment = @craft.comments.new(comment_params)
        if @comment.save 
            render json: @craft
        else
            render json: {error: 'error creating your comment :('}
        end
    end

    def show 
        @comment = Comment.find(params[:id])
        render json: @comment
    end

    def destroy
        @comment = Comment.find(params["id"])
        @craft = Craft.find(@comment.craft_id)
        @comment.destroy
        render json: @craft
    end

    private  

    def set_craft 
        @craft = Craft.find(params[:craft_id])
    end

    def craft_params
        params.require(:material).permit(:name, :craft_id, :description)
    end
end
