class CraftLog < ApplicationController 
    before_action :set_craft

    def create
        @comment = @craft.comments.new(comments_params)
        if @comment.save
          render json: @craft
        end
      end
    
      def index
        @comments = Comment.where(craft_id: params[:id])
        render json: @comments
      end
    
      def update
        @comment = Comment.find_by(id: params[:id])
        @comment.update(comments_params)
        render json: @comment
      end

    private 

    def set_craft 
        @craft = Craft.find(params[:craft_id])
    end

    def craft_params
        paramspermit(:comment, :craft_id)
    end

end
