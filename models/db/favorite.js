module.exports = function (sequilize, Datatypes) {
    const Favorite = sequilize.define("Favorite", {
        profile_name: {
            type: Datatypes.STRING,
            allowNull: true,
        },
        beer_style: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    })
    return Favorite;
};