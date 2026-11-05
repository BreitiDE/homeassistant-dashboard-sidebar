/**
 * Per-user visibility.
 *
 * Decides whether the sidebar renders for the Home Assistant user who is
 * signed in to this browser. Pure logic, no rendering.
 *
 * This is a presentation filter, not access control: the config is still
 * part of the dashboard every user downloads.
 */

import type { DashboardSidebarConfig } from './types';

/** The parts of `hass.user` this module reads. */
export interface SidebarUser {
  /** Home Assistant user id (stable, what the editor stores). */
  id?: string;
  /** Display name of the user. */
  name?: string;
}

/** Normalizes a configured entry or a user attribute for comparison. */
const norm = (value: unknown): string => {
  return typeof value === 'string' ? value.trim().toLowerCase() : '';
};

/**
 * Whether the config restricts the sidebar to a list of users at all. An
 * absent key means everyone sees it.
 */
export const hasUserRestriction = (config: DashboardSidebarConfig): boolean => {
  return Array.isArray(config.users);
};

/**
 * Whether the sidebar is visible for the given user.
 *
 * An entry matches either the user's id or the user's display name
 * (case-insensitive), so YAML can use readable names while the editor stores
 * stable ids. When `users` is set but the user is not known yet (the
 * frontend is still loading), the sidebar stays hidden; the bootstrap
 * re-checks on its next tick.
 *
 * @param config - The sidebar config.
 * @param user - `hass.user`, or undefined while it is loading.
 * @returns True when the sidebar should render for this user.
 */
export const isVisibleForUser = (
  config: DashboardSidebarConfig,
  user: SidebarUser | undefined | null,
): boolean => {
  if (!hasUserRestriction(config)) {
    return true;
  }
  const id = norm(user?.id);
  const name = norm(user?.name);
  if (!id && !name) {
    return false;
  }
  return (config.users ?? []).some((entry) => {
    const e = norm(entry);
    return e !== '' && (e === id || e === name);
  });
};
