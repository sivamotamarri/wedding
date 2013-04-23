class HomeController < ApplicationController
  def index
  end

  def groom
    render :layout => 'groom'
  end

  def bride
    render :layout => 'groom'
  end

  def engagement
    render :layout => 'engagement'
  end
end
