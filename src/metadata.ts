/* eslint-disable */
export default async () => {
    const t = {
        ["./model/user.model"]: await import("./model/user.model"),
        ["./model/startup.model"]: await import("./model/startup.model"),
        ["./model/bookmark.model"]: await import("./model/bookmark.model"),
        ["./model/like.model"]: await import("./model/like.model"),
        ["./model/view.model"]: await import("./model/view.model")
    };
    return { "@nestjs/swagger": { "models": [[import("./dto/auth.dto"), { "RegisterRequest": { email: { required: true, type: () => String }, password: { required: true, type: () => String }, firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, location: { required: true, type: () => String } }, "LoginRequest": { email: { required: true, type: () => String }, password: { required: true, type: () => String } }, "RegisterResponse": { email: { required: true, type: () => String }, password: { required: true, type: () => String }, firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, location: { required: true, type: () => String } }, "LoginResponse": { email: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./model/user.model"), { "User": { id: { required: true, type: () => Number }, email: { required: true, type: () => String }, avatarUrl: { required: true, type: () => String }, firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, location: { required: true, type: () => String }, moderator: { required: true, type: () => Boolean }, createdAt: { required: true, type: () => Date } } }], [import("./model/startup.model"), { "Startup": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, locationLat: { required: true, type: () => Number }, locationLng: { required: true, type: () => Number }, locationName: { required: true, type: () => String }, founderName: { required: true, type: () => String }, websiteUrl: { required: true, type: () => String }, logoUrl: { required: true, type: () => String }, categories: { required: true, type: () => String }, foundedDate: { required: true, type: () => Date }, contactInfo: { required: true, type: () => String }, likes: { required: true, type: () => Number }, bookmarks: { required: true, type: () => Number }, views: { required: true, type: () => Number } } }], [import("./model/bookmark.model"), { "Bookmark": { id: { required: true, type: () => Number }, user: { required: true, type: () => t["./model/user.model"].User }, startup: { required: true, type: () => t["./model/startup.model"].Startup }, timestamp: { required: true, type: () => Date } } }], [import("./model/like.model"), { "Like": { id: { required: true, type: () => Number }, user: { required: true, type: () => t["./model/user.model"].User }, startup: { required: true, type: () => t["./model/startup.model"].Startup }, timestamp: { required: true, type: () => Date } } }], [import("./model/view.model"), { "View": { id: { required: true, type: () => Number }, user: { required: true, type: () => t["./model/user.model"].User }, startup: { required: true, type: () => t["./model/startup.model"].Startup }, timestamp: { required: true, type: () => Date } } }]], "controllers": [[import("./controller/auth.controller"), { "AuthController": { "register": {}, "login": {} } }], [import("./controller/bookmark.controller"), { "BookmarkController": { "getAll": { type: [t["./model/bookmark.model"].Bookmark] }, "findOneByUserIdAndStartupId": { type: t["./model/bookmark.model"].Bookmark }, "create": { type: t["./model/bookmark.model"].Bookmark }, "remove": {} } }], [import("./controller/like.controller"), { "LikeController": { "create": { type: t["./model/like.model"].Like }, "remove": {}, "findOneByUserIdAndStartupId": { type: t["./model/like.model"].Like } } }], [import("./controller/startup.controller"), { "StartupController": { "getAll": { type: [t["./model/startup.model"].Startup] }, "getOneById": { type: t["./model/startup.model"].Startup }, "create": { type: t["./model/startup.model"].Startup }, "update": { type: t["./model/startup.model"].Startup }, "delete": {} } }], [import("./controller/view.controller"), { "ViewController": { "create": { type: t["./model/view.model"].View }, "findAllByStartupId": { type: [t["./model/view.model"].View] }, "getAll": { type: [t["./model/view.model"].View] } } }]] } };
};