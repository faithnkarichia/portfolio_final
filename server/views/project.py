from flask import Blueprint, request, jsonify
from models import db, Project

project_bp = Blueprint("projects", __name__)

# 🔹 View all projects
@project_bp.route("/projects", methods=["GET"])
def get_projects():
    projects = Project.query.all()
    project_list = [{
        "id": p.id,
        "name": p.name,
        "link": p.link,
        "description": p.description,
        "github_link": p.github_link,
        "live_link": p.live_link
    } for p in projects]

    return jsonify(project_list), 200

# 🔹 Add a new project
@project_bp.route("/add_project", methods=["POST"])
def add_project():
    data = request.get_json()

    required_fields = ["name", "link", "description"]
    if not all(data.get(field) for field in required_fields):
        return jsonify({"error": "Name, link, and description are required"}), 400

    new_project = Project(
        name=data["name"],
        link=data["link"],
        description=data["description"],
        github_link=data.get("github_link"),
        live_link=data.get("live_link")
    )

    db.session.add(new_project)
    db.session.commit()

    return jsonify({
        "id": new_project.id,
        "name": new_project.name,
        "link": new_project.link,
        "description": new_project.description,
        "github_link": new_project.github_link,
        "live_link": new_project.live_link
    }), 201

# 🔹 Edit an existing project
@project_bp.route("/projects/<int:id>", methods=["PUT"])
def edit_project(id):
    data = request.get_json()
    project = Project.query.get(id)

    if not project:
        return jsonify({"error": "Project not found"}), 404

    project.name = data.get("name", project.name)
    project.link = data.get("link", project.link)
    project.description = data.get("description", project.description)
    project.github_link = data.get("github_link", project.github_link)
    project.live_link = data.get("live_link", project.live_link)

    db.session.commit()

    return jsonify({
        "id": project.id,
        "name": project.name,
        "description": project.description,
        "link": project.link,
        "github_link": project.github_link,
        "live_link": project.live_link
    }), 200

# 🔹 Delete a project
@project_bp.route("/projects/<int:id>", methods=["DELETE"])
def delete_project(id):
    project = Project.query.get(id)

    if not project:
        return jsonify({"error": "Project not found"}), 404

    db.session.delete(project)
    db.session.commit()

    return jsonify({"message": "Project deleted successfully!"}), 200
