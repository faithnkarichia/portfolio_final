from flask import Blueprint, request, jsonify
from models import Certificate,db
certificate_bp=Blueprint("certificate_bp", __name__)

# get all the certs
@certificate_bp.route("/certificates", methods=["GET"])
def get_certs():
    certs=Certificate.query.all()
    if not certs:
        return jsonify({"error":"no certificates available"}),404
    

    return jsonify([cert.to_dict() for cert in certs]),200



# post a cert
@certificate_bp.route("/add_certs", methods=["POST"])
def addCert():
    data = request.get_json()

    # Check that all fields are provided
    if not all([data.get("title"), data.get("issuer"), data.get("date"), data.get("link"), data.get("description")]):
        return jsonify({"error": "Some fields are missing"}), 400

    # Create a new Certificate object using the model
    new_cert = Certificate(
        title=data["title"],
        issuer=data["issuer"],
        date=data["date"],
        link=data["link"],
        description=data["description"]
    )

    db.session.add(new_cert)
    db.session.commit()

    return jsonify({"message": "Certificate added successfully"}), 201



             

# edit a cert
@certificate_bp.route("/certs/<int:id>", methods=["PUT"])
def editCert(id):
    data = request.get_json()
    cert = Certificate.query.get(id)

    if not cert:
        return jsonify({"error": "Certificate not found"}), 404

    # Update the certificate fields
    cert.title = data.get("title", cert.title)
    cert.issuer = data.get("issuer", cert.issuer)
    cert.date = data.get("date", cert.date)
    cert.link = data.get("link", cert.link)
    cert.description = data.get("description", cert.description)

    db.session.commit()

    return jsonify({"message": "Certificate updated successfully"}), 200


# delete a cert
@certificate_bp.route("/certs/<int:id>", methods=["DELETE"])
def deleteCert(id):
    cert = Certificate.query.get(id)

    if not cert:
        return jsonify({"error": "Certificate not found"}), 404

    db.session.delete(cert)
    db.session.commit()

    return jsonify({"message": "Certificate deleted successfully"}), 200

