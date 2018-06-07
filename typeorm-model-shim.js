// this "shim" can be used on the frontend to prevent from errors on undefined
// decorators in the models, when you are sharing same models across backend and frontend.
// to use this shim simply configure your systemjs/webpack configuration to use this file instead of typeorm module.

// for system.js this resolved this way:
// System.config({
//     ...
//     packages: {
//         "typeorm": {
//             main: "typeorm-model-shim.js",
//             defaultExtension: "js"
//         }
//     }
// }

// for webpack this is resolved this way:
// resolve: { // see: http://webpack.github.io/docs/configuration.html#resolve
//     alias: {
//         typeorm: path.resolve(__dirname, "../node_modules/typeorm/typeorm-model-shim")
//     }
// }


// columns

/* export */ function Column(typeOrOptions, options) {
    return function (object, propertyName) {
    };
}
exports.Column = Column;

/* export */ function CreateDateColumn(options) {
    return function (object, propertyName) {
    };
}
exports.CreateDateColumn = CreateDateColumn;

/* export */ function DiscriminatorColumn(discriminatorOptions) {
    return function (object, propertyName) {
    };
}
exports.DiscriminatorColumn = DiscriminatorColumn;

/* export */ function ObjectIdColumn(columnOptions) {
    return function (object, propertyName) {
    };
}
exports.ObjectIdColumn = ObjectIdColumn;

/* export */ function PrimaryColumn(typeOrOptions, options) {
    return function (object, propertyName) {
    };
}
exports.PrimaryColumn = PrimaryColumn;

/* export */ function PrimaryGeneratedColumn(options) {
    return function (object, propertyName) {
    };
}
exports.PrimaryGeneratedColumn = PrimaryGeneratedColumn;

/* export */ function UpdateDateColumn(options) {
    return function (object, propertyName) {
    };
}
exports.UpdateDateColumn = UpdateDateColumn;

/* export */ function VersionColumn(options) {
    return function (object, propertyName) {
    };
}
exports.VersionColumn = VersionColumn;

// entities

/* export */ function AbstractEntity() {
    return function (object) {
    };
}
exports.AbstractEntity = AbstractEntity;

/* export */ function ClassEntityChild(tableName, options) {
    return function (object) {
    };
}
exports.ClassEntityChild = ClassEntityChild;

/* export */ function ClosureEntity(name, options) {
    return function (object) {
    };
}
exports.ClosureEntity = ClosureEntity;

/* export */ function EmbeddableEntity() {
    return function (object) {
    };
}
exports.EmbeddableEntity = EmbeddableEntity;

/* export */ function SingleEntityChild() {
    return function (object) {
    };
}
exports.SingleEntityChild = SingleEntityChild;

/* export */ function Entity(name, options) {
    return function (object) {
    };
}
exports.Entity = Entity;

/* export */ function TableInheritance(type) {
    return function (object) {
    };
}
exports.TableInheritance = TableInheritance;

// listeners

/* export */ function AfterInsert() {
    return function (object, propertyName) {
    };
}
exports.AfterInsert = AfterInsert;

/* export */ function AfterLoad() {
    return function (object, propertyName) {
    };
}
exports.AfterLoad = AfterLoad;

/* export */ function AfterRemove() {
    return function (object, propertyName) {
    };
}
exports.AfterRemove = AfterRemove;

/* export */ function AfterUpdate() {
    return function (object, propertyName) {
    };
}
exports.AfterUpdate = AfterUpdate;

/* export */ function BeforeInsert() {
    return function (object, propertyName) {
    };
}
exports.BeforeInsert = BeforeInsert;

/* export */ function BeforeRemove() {
    return function (object, propertyName) {
    };
}
exports.BeforeRemove = BeforeRemove;

/* export */ function BeforeUpdate() {
    return function (object, propertyName) {
    };
}
exports.BeforeUpdate = BeforeUpdate;

/* export */ function EventSubscriber() {
    return function (object, propertyName) {
    };
}
exports.EventSubscriber = EventSubscriber;

// relations

/* export */ function JoinColumn(options) {
    return function (object, propertyName) {
    };
}
exports.JoinColumn = JoinColumn;

/* export */ function JoinTable(options) {
    return function (object, propertyName) {
    };
}
exports.JoinTable = JoinTable;

/* export */ function ManyToMany(typeFunction, inverseSideOrOptions, options) {
    return function (object, propertyName) {
    };
}
exports.ManyToMany = ManyToMany;

/* export */ function ManyToOne(typeFunction, inverseSideOrOptions, options) {
    return function (object, propertyName) {
    };
}
exports.ManyToOne = ManyToOne;

/* export */ function OneToMany(typeFunction, inverseSideOrOptions, options) {
    return function (object, propertyName) {
    };
}
exports.OneToMany = OneToMany;

/* export */ function OneToOne(typeFunction, inverseSideOrOptions, options) {
    return function (object, propertyName) {
    };
}
exports.OneToOne = OneToOne;

/* export */ function RelationCount(relation) {
    return function (object, propertyName) {
    };
}
exports.RelationCount = RelationCount;

/* export */ function RelationId(relation) {
    return function (object, propertyName) {
    };
}
exports.RelationId = RelationId;

// tables (deprecated)

/* export */ function AbstractTable() {
    return function (object) {
    };
}
exports.AbstractTable = AbstractTable;

/* export */ function ClassTableChild(tableName, options) {
    return function (object) {
    };
}
exports.ClassTableChild = ClassTableChild;

/* export */ function ClosureTable(name, options) {
    return function (object) {
    };
}
exports.ClosureTable = ClosureTable;

/* export */ function EmbeddableTable() {
    return function (object) {
    };
}
exports.EmbeddableTable = EmbeddableTable;

/* export */ function SingleTableChild() {
    return function (object) {
    };
}
exports.SingleTableChild = SingleTableChild;

/* export */ function Table(name, options) {
    return function (object) {
    };
}
exports.Table = Table;

// tree

/* export */ function TreeChildren(options) {
    return function (object, propertyName) {
    };
}
exports.TreeChildren = TreeChildren;

/* export */ function TreeLevelColumn() {
    return function (object, propertyName) {
    };
}
exports.TreeLevelColumn = TreeLevelColumn;

/* export */ function TreeParent(options) {
    return function (object, propertyName) {
    };
}
exports.TreeParent = TreeParent;

// other

/* export */ function DiscriminatorValue(options) {
    return function (object, propertyName) {
    };
}
exports.DiscriminatorValue = DiscriminatorValue;

/* export */ function Index(options) {
    return function (object, propertyName) {
    };
}
exports.Index = Index;