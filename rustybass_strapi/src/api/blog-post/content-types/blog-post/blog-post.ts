// Interface automatically generated by schemas-to-ts

import { Media } from '../../../../common/schemas-to-ts/Media';
import { Media_Plain } from '../../../../common/schemas-to-ts/Media';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface BlogPost {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title?: string;
    description?: string;
    featuredImage: { data: Media };
    body?: string;
  };
}
export interface BlogPost_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  description?: string;
  featuredImage: Media_Plain;
  body?: string;
}

export interface BlogPost_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  description?: string;
  featuredImage: number;
  body?: string;
}

export interface BlogPost_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  description?: string;
  featuredImage: AdminPanelRelationPropertyModification<Media_Plain>;
  body?: string;
}
