import { describe, expect, it } from 'vitest';

import type { DashboardSidebarConfig } from './types';
import { hasUserRestriction, isVisibleForUser } from './users';

const base: DashboardSidebarConfig = { body: [{ type: 'divider' }] };
const stefan = { id: 'a1b2c3', name: 'Stefan' };
const guest = { id: 'ffff00', name: 'Gast' };

describe('isVisibleForUser', () => {
  it('shows the sidebar to everyone without a users key', () => {
    expect(hasUserRestriction(base)).toBe(false);
    expect(isVisibleForUser(base, guest)).toBe(true);
    expect(isVisibleForUser(base, undefined)).toBe(true);
  });

  it('matches a listed user id', () => {
    const config = { ...base, users: ['a1b2c3'] };
    expect(isVisibleForUser(config, stefan)).toBe(true);
    expect(isVisibleForUser(config, guest)).toBe(false);
  });

  it('matches a display name case-insensitively and trimmed', () => {
    const config = { ...base, users: ['  stefan '] };
    expect(isVisibleForUser(config, stefan)).toBe(true);
    expect(isVisibleForUser(config, guest)).toBe(false);
  });

  it('stays hidden while the user is still unknown', () => {
    const config = { ...base, users: ['Stefan'] };
    expect(isVisibleForUser(config, undefined)).toBe(false);
    expect(isVisibleForUser(config, {})).toBe(false);
  });

  it('ignores empty and non-string entries', () => {
    const config = { ...base, users: ['', 42 as unknown as string] };
    expect(isVisibleForUser(config, { id: '', name: '' })).toBe(false);
    expect(isVisibleForUser(config, guest)).toBe(false);
  });
});
