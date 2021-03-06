class CommentsController < ApplicationController
    
    before_action :set_craft

    def index
        @comments = Comment.all   
        render json: @comments
    end

    def create 
        # binding.pry
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

    def comment_params
        params.require(:comment).permit(:body, :craft_id)
    end
end
